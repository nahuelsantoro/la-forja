import heroImage from '../../assets/hero-la-forja.png'
import './HeroSection.css'

export function HeroSection() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero__content">
        <span className="hero__eyebrow">
          FERRETERÍA LA FORJA
        </span>

        <h1>
          Todo para tu proyecto,
          <br />
          en un solo lugar.
        </h1>

        <p>
          Más de 10 años de experiencia ayudándote a encontrar
          la solución adecuada para cada trabajo.
        </p>

        <div className="hero__actions">
          <a href="#productos" className="hero__button hero__button--primary">
            Ver productos
          </a>

          <a href="#soluciones" className="hero__button hero__button--secondary">
            ¿Qué necesitás resolver?
          </a>
        </div>
      </div>
    </section>
  )
}