import './BrandsSection.css'

import boschLogo from '../../assets/brands/bosch-png.png'
import stanleyLogo from '../../assets/brands/stanley-png.png'
import einhellLogo from '../../assets/brands/einhell-png.png'
import bremenLogo from '../../assets/brands/bremen-png.png'
import lusqtoffLogo from '../../assets/brands/lusqtoff-png.png'
import wokinLogo from '../../assets/brands/wokin-png.png'

const brands = [
  {
    name: 'BOSCH',
    image: boschLogo,
  },
  {
    name: 'STANLEY',
    image: stanleyLogo,
  },
  {
    name: 'EINHELL',
    image: einhellLogo,
  },
  {
    name: 'BREMEN',
    image: bremenLogo,
  },
  {
    name: 'LUSQTOFF',
    image: lusqtoffLogo,
  },
  {
    name: 'WOKIN',
    image: wokinLogo,
  },
]

export function BrandsSection() {
  return (
    <section className="brands" id="marcas">
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
            <div className="brand-card" key={brand.name}>
              <img
                src={brand.image}
                alt={`Logo ${brand.name}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}