import { HeroSection } from '../components/hero/heroSection'
import { CategoriesSection } from '../components/categories/CategoriesSection'
import { BrandsSection } from '../components/brands/BrandsSection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <BrandsSection />
    </main>
  )
}