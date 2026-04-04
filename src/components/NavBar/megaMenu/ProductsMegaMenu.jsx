import { LOGO_SRC, PRODUCTS_COLUMN_BLURB, PRODUCTS_LINK_DESC } from './constants.js'
import { MegaMenuColumnHeader, MegaMenuDivider, MegaMenuGrid, MegaMenuLink, MegaMenuVideoCard } from './primitives.jsx'

export function ProductsMegaMenuContent({ onNavigate }) {
  return (
    <MegaMenuGrid>
      <div className="flex min-h-0 flex-col lg:min-h-[320px]">
        <MegaMenuColumnHeader title="Our portfolio" blurb={PRODUCTS_COLUMN_BLURB} />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink title="Product categories" description={PRODUCTS_LINK_DESC} href="#product-categories" onNavigate={onNavigate} />
        <MegaMenuDivider />
        <MegaMenuLink title="Brand house" description={PRODUCTS_LINK_DESC} href="#brand-house" onNavigate={onNavigate} />
        <MegaMenuVideoCard
          href="#products-showreel"
          imageSrc="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=480&q=80"
          onNavigate={onNavigate}
        />
      </div>

      <div className="flex min-h-0 flex-col lg:min-h-[320px]">
        <MegaMenuColumnHeader title="Food & beverage" blurb={PRODUCTS_COLUMN_BLURB} />
        <div className="min-h-4 flex-1 lg:min-h-6" />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink title="Dairy & nutrition" description={PRODUCTS_LINK_DESC} href="#dairy-nutrition" onNavigate={onNavigate} />
        <MegaMenuDivider />
        <MegaMenuLink title="Beverages" description={PRODUCTS_LINK_DESC} href="#beverages" onNavigate={onNavigate} />
      </div>

      <div className="flex min-h-0 flex-col lg:min-h-[320px]">
        <MegaMenuColumnHeader title="Personal care" blurb={PRODUCTS_COLUMN_BLURB} />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink title="Hair care" description={PRODUCTS_LINK_DESC} href="#hair-care" onNavigate={onNavigate} />
        <MegaMenuDivider />
        <MegaMenuLink title="Skin care & hygiene" description={PRODUCTS_LINK_DESC} href="#skin-care" onNavigate={onNavigate} />
        <div className="mt-auto flex justify-center pt-6">
          <img src={LOGO_SRC} alt="CavinKare" className="h-auto w-full max-w-[180px] object-contain" />
        </div>
      </div>

      <div className="flex min-h-0 flex-col lg:min-h-[320px]">
        <MegaMenuColumnHeader title="Discover more" blurb={PRODUCTS_COLUMN_BLURB} />
        <div className="min-h-4 flex-1 lg:min-h-6" />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink title="New launches" description={PRODUCTS_LINK_DESC} href="#new-launches" onNavigate={onNavigate} />
        <MegaMenuDivider />
        <MegaMenuLink title="Quality & sustainability" description={PRODUCTS_LINK_DESC} href="#quality-sustainability" onNavigate={onNavigate} />
      </div>
    </MegaMenuGrid>
  )
}
