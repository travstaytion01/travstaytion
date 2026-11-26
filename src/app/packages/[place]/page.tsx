import Link from "next/link";
import MaldivesResorts from "@/components/MaldivesResorts";
import ThailandCollection from "@/components/ThailandCollection";
import { notFound } from "next/navigation";
import { collections } from "@/lib/collections";

type Props = {params: Promise<{place: string}>};
export function generateStaticParams() { return Object.keys(collections).map(place => ({place})); }
export const dynamicParams = false;
async function collection(props: Props) {
  const {place} = await props.params;
  if (place !== "maldives" && place !== "thailand") notFound();
  return collections[place];
}
export async function generateMetadata(props: Props) {
  const { name } = await collection(props);
  return {title: name === "Maldives" ? "Maldives resorts and couples packages | TravStaytion" : "Thailand couples packages | TravStaytion"};
}
export default async function CollectionPage(props: Props) {
  const place = await collection(props);
  if (place.name === "Thailand") return <ThailandCollection />;
  return <article className="collection">
    <header className="collection-hero">
      <div><Link href="/packages#couples-special">← Couples Special</Link>
        <p className="eyebrow">{place.region}</p><h1>{place.name} resorts and itineraries</h1><p>{place.intro}</p>
        <Link className="trip-link" href="#resorts">Explore Maldives resorts</Link>
      </div><img src={place.image} alt={place.alt} />
    </header>
    <MaldivesResorts />
    <section className="collection-list"><h2>Choose an itinerary for two</h2>
      <p>Suggested routes for two. Ask for a written quote covering dates, transfers, accommodation and cancellation terms.</p>
      <div className="trip-grid">{place.trips.map(trip => <article key={trip.name}>
        <img className="mb-4 aspect-[3/2] w-full rounded-lg object-cover" src={trip.image} alt={trip.alt} width={600} height={400} loading="lazy" />
        <p className="eyebrow">{trip.nights} nights · {trip.route}</p><h3>{trip.name}</h3><p>{trip.description}</p>
        <details><summary>Explore this itinerary</summary><ol>{trip.days.map(day => <li key={day}>{day}</li>)}</ol></details>
        <Link className="trip-link" href={'/quote?' + new URLSearchParams({destination:place.name,trip:"couples",itinerary:trip.name})}>Request {trip.name} quote</Link>
      </article>)}</div>
    </section>
  </article>;
}
