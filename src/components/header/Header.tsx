import logoLaForja from '../../assets/logo-la-forja.png'
import './Header.css'
export function Header() {
  return (
    <header>
      <div className="container">
        <a href="#" aria-label="Ir al inicio">
          <img
            src={logoLaForja}
            alt="Ferretería La Forja"
          />
        </a>

        <nav>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Soluciones</a>
          <a href="#">Marcas</a>
          <a href="#">Ofertas</a>
          <a href="#">Nosotros</a>
        </nav>
      </div>
    </header>
  )
}