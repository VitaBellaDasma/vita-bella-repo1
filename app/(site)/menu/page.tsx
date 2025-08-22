
import menu from '../../../data/menu.json'

export const metadata = { title: 'Menu – Vita Bella' }

export default function MenuPage(){
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Menu</div>
        <h2>Drinks & Bites</h2>
        <div className="grid">
          {menu.map((item:any)=>(
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
    </main>
  )
}
