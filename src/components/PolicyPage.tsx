export default function PolicyPage({title,sections}: {title:string;sections:Record<string,string>}) {
  return <article className="policy"><div><p className="eyebrow">TravStaytion · Updated 16 November 2026</p><h1>{title}</h1>
    {Object.entries(sections).map(([heading,copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}
    <nav aria-label="Related policies" className="mt-6 flex flex-wrap gap-4"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/refund">Refunds</a></nav>
    <h2>Contact TravStaytion</h2><p><a href="mailto:holidays@travstaytion.com">holidays@travstaytion.com</a> · <a href="tel:+919999959915">+91 99999 59915</a></p>
    <p>Ghaziabad, Uttar Pradesh, India · GSTIN 09DPCPK2869P1Z3</p>
  </div></article>;
}
