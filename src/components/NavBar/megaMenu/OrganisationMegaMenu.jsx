import { LOGO_SRC, ORG_COLUMN_BLURB, ORG_LINK_DESC } from './constants.js'
import { MegaMenuColumnHeader, MegaMenuDivider, MegaMenuGrid, MegaMenuLink, MegaMenuVideoCard } from './primitives.jsx'

export function OrganisationMegaMenuContent({ onNavigate }) {
  return (
    <MegaMenuGrid>
      <div className="flex min-h-0 flex-col lg:min-h-[320px]">
        <MegaMenuColumnHeader title="About CavinKare" blurb={ORG_COLUMN_BLURB} />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink title="Vision Mission & Values" description={ORG_LINK_DESC} href="#vision-mission" onNavigate={onNavigate} />
        <MegaMenuDivider />
        <MegaMenuLink title="Leadership" description={ORG_LINK_DESC} href="#leadership" onNavigate={onNavigate} />
        <MegaMenuVideoCard
          href="#about-video"
          imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&q=80"
          onNavigate={onNavigate}
        />
      </div>

      <div className="flex min-h-0 flex-col lg:min-h-[320px]">
        <MegaMenuColumnHeader title="Operations" blurb={ORG_COLUMN_BLURB} />
        <div className="min-h-4 flex-1 lg:min-h-6" />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink title="Manufacturing Facilities" description={ORG_LINK_DESC} href="#manufacturing" onNavigate={onNavigate} />
        <MegaMenuDivider />
        <MegaMenuLink title="International Business" description={ORG_LINK_DESC} href="#international" onNavigate={onNavigate} />
      </div>

      <div className="flex min-h-0 flex-col lg:min-h-[320px]">
        <MegaMenuColumnHeader title="Media & Recognition" blurb={ORG_COLUMN_BLURB} />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink title="Media" description={ORG_LINK_DESC} href="#media" onNavigate={onNavigate} />
        <MegaMenuDivider />
        <MegaMenuLink title="Awards & Recognitions" description={ORG_LINK_DESC} href="#awards" onNavigate={onNavigate} />
        <div className="mt-auto flex justify-center pt-6">
          <img src={LOGO_SRC} alt="CavinKare" className="h-auto w-full max-w-[180px] object-contain" />
        </div>
      </div>

      <div className="flex min-h-0 flex-col lg:min-h-[320px]">
        <MegaMenuColumnHeader title="Innovation" blurb={ORG_COLUMN_BLURB} />
        <div className="min-h-4 flex-1 lg:min-h-6" />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink title="Research & Development" description={ORG_LINK_DESC} href="#research-development" onNavigate={onNavigate} />
        <MegaMenuDivider />
        <MegaMenuLink title="Blogs" description={ORG_LINK_DESC} href="#blogs" onNavigate={onNavigate} />
      </div>
    </MegaMenuGrid>
  )
}
