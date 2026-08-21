import { buildWhatsAppUrl } from '../../config/whatsapp'
import './CategoriesSection.css'

const solutions = [
  {
    title: 'Armar un set de herramientas',
    icon: '🧰',
  },
  {
    title: 'Colocar una estantería',
    icon: '🪜',
  },
  {
    title: 'Sellar, pegar o lubricar',
    icon: '🧴',
  },
  {
    title: 'Pintar',
    icon: '🖌️',
  },
  {
    title: 'Trabajar en el jardín',
    icon: '🌱',
  },
  {
    title: 'Reparar electricidad',
    icon: '⚡',
  },
  {
    title: 'Plomería',
    icon: '🚰',
  },
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
              `Hola! Estoy viendo la web de Ferretería La Forja y necesito ayuda con: ${solution.title}.`

            return (
              <a
                className="category-card"
                href={buildWhatsAppUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                key={solution.title}
              >
                <div className="category-card__icon">
                  {solution.icon}
                </div>

                <h3>{solution.title}</h3>

                <span className="category-card__arrow">
                  →
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}