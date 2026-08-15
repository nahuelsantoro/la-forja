import { buildWhatsAppUrl } from '../../config/whatsapp'
import './CategoriesSection.css'

const solutions = [
  'Armar un set de herramientas',
  'Colocar una estantería',
  'Sellar, pegar o lubricar',
  'Pintar',
  'Trabajar en el jardín',
  'Reparar electricidad',
  'Plomería',
]

export function CategoriesSection() {
  return (
    <section className="categories" id="soluciones">
      <div className="categories__container">
        <div className="categories__heading">
          <span>ENCONTRÁ LA SOLUCIÓN</span>

          <h2>¿Qué necesitás resolver?</h2>

          <p>
            Elegí lo que querés hacer y te ayudamos a encontrar
            los productos adecuados.
          </p>
        </div>

        <div className="categories__grid">
          {solutions.map((solution) => {
            const message =
              `Hola! Estoy viendo la web de Ferretería La Forja y necesito ayuda con: ${solution}.`

            return (
              <a
                className="category-card"
                href={buildWhatsAppUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                key={solution}
              >
                <h3>{solution}</h3>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}