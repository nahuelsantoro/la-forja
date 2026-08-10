import { HeroSection } from '../components/hero/HeroSection'
import { CategoriesSection } from '../components/categories/CategoriesSection'
import { BrandsSection } from '../components/brands/BrandsSection'
import { FeaturedProducts } from '../components/products/FeaturedProducts'
export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <BrandsSection />
      <FeaturedProducts />
    </>
  )
}