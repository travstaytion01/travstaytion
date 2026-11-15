import Link from "next/link";
import type { destinationCards } from "@/lib/destinations";
export default function DestinationCard({name,image,description}: (typeof destinationCards)[number] & {index?:number}) {
  return <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
    <img src={image} alt={name + " destination illustration"} loading="lazy" className="h-52 w-full object-cover"/>
    <div className="p-6"><h3 className="font-serif text-3xl">{name}</h3><p className="mt-3 text-slate-700">{description}</p>
      <Link className="trip-link" href={"/packages/"+name.toLowerCase()}>Explore {name} itineraries</Link>
    </div></article>;
}
