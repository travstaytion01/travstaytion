import DestinationCard from "@/components/DestinationCard";
import { destinationCards } from "@/lib/destinations";
export default function PackagesPage() {
  return <article className="collection"><header className="collection-list"><p className="eyebrow">Travel collections</p><h1>Find your next journey</h1>
    <p>Compare routes by destination, then request a quote for your dates.</p></header>
    <section id="couples-special" className="collection-list scroll-mt-24"><h2>Couples Special</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{destinationCards.map(d => <DestinationCard key={d.name} {...d}/>)}</div>
    </section>
  </article>;
}
