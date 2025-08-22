
import events from '../../../data/events.json'
import { config } from '../../../lib/config'

export const metadata = { title: 'Events – Vita Bella' }

export default function EventsPage(){
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Happenings</div>
        <h2>Join Our Events</h2>
        <div className="grid">
          {events.map((e:any)=>(
            <div className="card" key={e.name}>
              <strong>{e.name}</strong>
              <p style={{color:'#cbd5e1'}}>{e.desc}</p>
              <div className="badge">When: {e.when}</div>
              <div style={{marginTop:10}}>
                <a className="btn" href={config.messengerUrl} target="_blank">Sign up on Messenger</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
