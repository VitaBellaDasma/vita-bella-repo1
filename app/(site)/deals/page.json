
import deals from '../../../data/deals.json'

export const metadata = { title: 'Deals – Vita Bella' }

export default function DealsPage(){
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Promos</div>
        <h2>Save with Combos</h2>
        <div className="grid">
          {deals.map((d:any)=>(
            <div className="card" key={d.title}>
              <strong>{d.title}</strong>
              <p style={{color:'#cbd5e1'}}>{d.desc}</p>
              <div className="badge">₱{d.price}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
