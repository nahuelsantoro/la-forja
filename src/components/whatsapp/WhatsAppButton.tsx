import "./WhatsAppButton.css";

export function WhatsAppButton() {
  const phoneNumber = "5492212243516";

  const message =
    "Hola! Estoy viendo la web de Ferretería La Forja y quería hacer una consulta.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

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
  );
}