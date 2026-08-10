import './CategoriesSection.css'
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
          <article className="category-card">
            <h3>Armar un set de herramientas</h3>
          </article>

          <article className="category-card">
            <h3>Colocar una estantería</h3>
          </article>

          <article className="category-card">
            <h3>Sellar, pegar o lubricar</h3>
          </article>

          <article className="category-card">
            <h3>Pintar</h3>
          </article>

          <article className="category-card">
            <h3>Trabajar en el jardín</h3>
          </article>

          <article className="category-card">
            <h3>Reparar electricidad</h3>
          </article>

          <article className="category-card">
            <h3>Plomería</h3>
          </article>
        </div>
      </div>
    </section>
  )
}