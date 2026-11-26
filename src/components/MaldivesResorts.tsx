import Image from "next/image";
import Link from "next/link";
import { maldivesResorts } from "@/lib/maldives-resorts";

export default function MaldivesResorts() {
  return (
    <section id="resorts" aria-labelledby="resorts-heading" className="collection-list scroll-mt-24">
      <h2 id="resorts-heading">10 luxury resorts in the Maldives</h2>
      <p>Compare beach and overwater villas, dining and island experiences. Ask for rates and transfer options for your dates.</p>
      <div className="trip-grid">
        {maldivesResorts.map((resort) => (
          <article key={resort.slug}>
            <Image
              src={`/maldives/${resort.slug}.webp`}
              alt={resort.name}
              width={960}
              height={640}
              sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 340px"
              className="mb-4 aspect-[3/2] w-full rounded-lg object-cover"
            />
            <p className="eyebrow">{resort.atoll}</p>
            <h3>{resort.name}</h3>
            <p>{resort.transfer}</p>
            <p>{resort.description}</p>
            <details>
              <summary>Villas, dining and experiences</summary>
              <dl className="my-3 space-y-2 text-sm">
                <div><dt className="font-semibold">Villas</dt><dd>{resort.villas}</dd></div>
                <div><dt className="font-semibold">Dining</dt><dd>{resort.dining}</dd></div>
                <div><dt className="font-semibold">Experiences</dt><dd>{resort.experiences}</dd></div>
              </dl>
              {resort.note && <p>{resort.note}</p>}
              <a className="text-sm underline" href={`https://resortlife.travel/resort/${resort.slug}`}>Resort Life property profile and photo source</a>
            </details>
            <Link
              className="trip-link"
              aria-label={`Request a quote for ${resort.name}`}
              href={{ pathname: "/quote", query: { destination: "Maldives", resort: resort.slug } }}
            >
              Request a resort quote
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
