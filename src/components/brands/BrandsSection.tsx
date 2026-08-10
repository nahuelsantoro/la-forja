import './BrandsSection.css'

const brands = [
  'BOSCH',
  'STANLEY',
  'EINHELL',
  'BREMEN',
  'LUSQTOFF',
  'WOKIN',
]

export function BrandsSection() {
  return (
    <section className="brands">
      <div className="brands__container">
        <div className="brands__heading">
          <span>MARCAS QUE TRABAJAMOS</span>

          <h2>Calidad que conocemos y podemos conseguir.</h2>

          <p>
            Trabajamos con marcas seleccionadas para ofrecerte
            productos confiables y precios competitivos.
          </p>
        </div>

        <div className="brands__grid">
          {brands.map((brand) => (
            <div className="brand-card" key={brand}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}