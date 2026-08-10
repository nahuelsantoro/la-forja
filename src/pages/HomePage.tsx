import { HeroSection } from '../components/hero/HeroSection'
import { CategoriesSection } from '../components/categories/CategoriesSection'
import { BrandsSection } from '../components/brands/BrandsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BrandsSection />
    </>
  )
}