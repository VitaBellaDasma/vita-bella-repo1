
import { config } from '../../../lib/config'

export const metadata = { title: 'Contact – Vita Bella' }

export default function ContactPage(){
  return (
    <main className="section">
      <div className="container">
        <div className="kicker">Contact</div>
        <h2>Find Us & Message Us</h2>
        <div className="grid">
          <div className="card">
            <strong>Address</strong>
            <p style={{color:'#cbd5e1'}}>{config.address}</p>
            <div className="badge">Hours: {config.hours}</div>
            <div style={{marginTop:10}}>
              <a className="btn" href={config.mapsUrl} target="_blank">Open in Maps</a>
            </div>
          </div>
          <div className="card">
            <strong>Facebook</strong>
            <p style={{color:'#cbd5e1'}}>Message us about orders, promos, or event signups.</p>
            <a className="btn" href={config.messengerUrl} target="_blank">Message on Facebook</a>
          </div>
        </div>
      </div>
    </main>
  )
}
