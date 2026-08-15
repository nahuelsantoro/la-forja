import './WhatsAppButton.css'
import { buildWhatsAppUrl } from '../../config/whatsapp'

export function WhatsAppButton() {
  const message =
    'Hola! Estoy viendo la web de Ferretería La Forja y quería hacer una consulta.'

  const whatsappUrl = buildWhatsAppUrl(message)

  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
    >
      <span className="whatsapp-button__icon">💬</span>

      <span className="whatsapp-button__text">
        ¿Necesitás ayuda?
        <strong>Escribinos por WhatsApp</strong>
      </span>
    </a>
  )
}