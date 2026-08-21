import './TrustBar.css'

const trustItems = [
  {
    title: '+10 años',
    text: 'de experiencia',
  },
  {
    title: 'Asesoramiento',
    text: 'personalizado',
  },
  {
    title: 'WhatsApp',
    text: 'respuesta rápida',
  },
]

export function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-bar__container">
        {trustItems.map((item) => (
          <div className="trust-bar__item" key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}