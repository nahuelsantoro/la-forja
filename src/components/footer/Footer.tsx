import logoLaForja from '../../assets/logo-la-forja.png'
import { buildWhatsAppUrl } from '../../config/whatsapp'
import './Footer.css'

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola! Estoy viendo la web de Ferretería La Forja y quería hacer una consulta.'
  )

  return (
    <footer className="footer" id="nosotros">
      <div className="footer__container">

        <div className="footer__brand">
          <img
            src={logoLaForja}
            alt="Ferretería La Forja"
          />

          <p>
            Más de 10 años de experiencia ayudándote a encontrar
            la solución adecuada para cada trabajo.
          </p>
        </div>

        <div className="footer__column">
          <h3>Navegación</h3>

          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#marcas">Marcas</a>
        </div>

        <div className="footer__column">
          <h3>Contacto</h3>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <span>La Plata, Buenos Aires</span>
        </div>

      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Ferretería La Forja. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}