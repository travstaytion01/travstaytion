import Link from "next/link";
import DestinationCard from "@/components/DestinationCard";
import { destinationCards } from "@/lib/destinations";
export default function PackagesPage() {
  return <article className="collection"><header className="collection-list"><p className="eyebrow">Travel collections</p><h1>Find your next journey</h1>
    <p>Compare routes by destination, then request a quote for your dates.</p></header>
    <section id="couples-special" className="collection-list scroll-mt-24"><h2>Couples Special</h2>
      <div className="grid gap-6 md:grid-cols-2">{destinationCards.filter(d => d.name !== "Dubai").map(d => <DestinationCard key={d.name} {...d}/>)}</div>
    </section><section className="collection-list"><h2>Dubai city breaks</h2><p>Browse six routes covering the city, desert and coast.</p><Link href="/packages/dubai" className="trip-link">Explore Dubai packages</Link></section>
  </article>;
}
