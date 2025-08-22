
import Link from 'next/link'
import deals from '../data/deals.json'
import menu from '../data/menu.json'
import { config } from '../lib/config'

export default function HomePage(){
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="kicker">Sta. Lucia • Classic Coffee Frappe</div>
          <h1>Welcome to {config.shopName}</h1>
          <p>Student-friendly drinks & bites. Tap below to see our menu and promos.</p>
          <div style={{display:'flex',gap:10,margin:'12px 0'}}>
            <Link className="btn" href="/menu">See Menu</Link>
            <Link className="btn" href="/deals">View Deals</Link>
          </div>
          <div className="card" style={{marginTop:12}}>
            <div className="kicker">Today’s Deal</div>
            <strong style={{display:'block',marginTop:6}}>{deals[0]?.title}</strong>
            <div style={{color:'#cbd5e1'}}>{deals[0]?.desc}</div>
            <div className="badge" style={{marginTop:8}}>₱{deals[0]?.price}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Popular Picks</div>
          <div className="grid">
            {menu.slice(0,6).map((item:any)=>(
              <div className="card" key={item.name}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                  <strong>{item.name}</strong>
                  <span className="badge">{item.category}</span>
                </div>
                <div style={{marginTop:6,color:'#cbd5e1'}}>{item.desc}</div>
                <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
                  {Object.entries(item.prices).map(([size,price]:any)=>(
                    <span className="badge" key={size}>{size}: ₱{price}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
