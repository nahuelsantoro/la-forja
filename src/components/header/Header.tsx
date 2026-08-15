import { useState } from 'react'
import logoLaForja from '../../assets/logo-la-forja.png'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header__container">

        <a
          href="#inicio"
          className="header__logo"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          <img
            src={logoLaForja}
            alt="Ferretería La Forja"
          />
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#productos" onClick={closeMenu}>Productos</a>
          <a href="#soluciones" onClick={closeMenu}>Soluciones</a>
          <a href="#marcas" onClick={closeMenu}>Marcas</a>
          <a href="#ofertas" onClick={closeMenu}>Ofertas</a>
          <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
        </nav>

      </div>
    </header>
  )
}