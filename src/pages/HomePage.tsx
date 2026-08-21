import { HeroSection } from '../components/hero/HeroSection'
import { CategoriesSection } from '../components/categories/CategoriesSection'
import { BrandsSection } from '../components/brands/BrandsSection'
import { FeaturedProducts } from '../components/products/FeaturedProducts'
import { TrustBar } from '../components/trust/TrustBar'

export function HomePage() {
  return (
<>
  <HeroSection />
  <TrustBar />
  <CategoriesSection />
  <BrandsSection />
  <FeaturedProducts />
</>
  )
}