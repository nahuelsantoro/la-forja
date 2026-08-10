import './FeaturedProducts.css'

import taladroBosch from '../../assets/products/taladro-bosh.webp'
import cintaStanley from '../../assets/products/cinta-stanley.webp'
import herramientasBremen from '../../assets/products/herramientas-bremen.webp'
import amoladoraLusqtoff from '../../assets/products/amoladora-lusqtoff.webp'

const products = [
  {
    id: 1,
    brand: 'BOSCH',
    name: 'Taladro percutor',
    price: '$124.900',
    image: taladroBosch,
  },
  {
    id: 2,
    brand: 'STANLEY',
    name: 'Cinta métrica 5 m',
    price: '$12.500',
    image: cintaStanley,
  },
  {
    id: 3,
    brand: 'BREMEN',
    name: 'Juego de herramientas',
    price: '$89.900',
    image: herramientasBremen,
  },
  {
    id: 4,
    brand: 'LUSQTOFF',
    name: 'Amoladora angular',
    price: '$76.500',
    image: amoladoraLusqtoff,
  },
]

export function FeaturedProducts() {
  return (
    <section className="featured-products" id="productos">
      <div className="featured-products__container">
        <div className="featured-products__heading">
          <span>PRODUCTOS DESTACADOS</span>

          <h2>Lo que más buscan nuestros clientes.</h2>

          <p>
            Una selección de productos para resolver trabajos
            cotidianos, proyectos y reparaciones.
          </p>
        </div>

        <div className="featured-products__grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-card__image">
  <img
    src={product.image}
    alt={`${product.brand} ${product.name}`}
  />
</div>

              <div className="product-card__content">
                <span className="product-card__brand">
                  {product.brand}
                </span>

                <h3>{product.name}</h3>

                <strong>{product.price}</strong>

                <a href="#">
                  Ver producto →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}