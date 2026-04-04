import { CAVIN_CARES_ROW_DESC, ORG_COLUMN_BLURB } from './constants.js'
import { MegaMenuColumnHeader, MegaMenuDivider, MegaMenuLink } from './primitives.jsx'

const cardClass =
  'rounded-lg border border-nav-border bg-nav-bg p-4 shadow-[0_1px_4px_rgba(0,0,0,0.08)]'

export function CavinCaresMegaMenuContent({ onNavigate }) {
  return (
    <div className="grid grid-cols-1 gap-6 bg-[color-mix(in_srgb,var(--nav-border)_12%,var(--nav-bg))] p-4 sm:p-6 md:p-8 lg:grid-cols-12 lg:gap-6 xl:gap-8">
      <div className="lg:col-span-5">
        <MegaMenuColumnHeader title="Awards & Recognition" blurb={ORG_COLUMN_BLURB} />
        <div className="h-4" />
        <MegaMenuDivider />
        <MegaMenuLink
          title="Chinnikrishnan Innovation Awards"
          description={CAVIN_CARES_ROW_DESC}
          href="#chinni-krishnan-innovation-awards"
          onNavigate={onNavigate}
        />
        <MegaMenuDivider />
        <MegaMenuLink
          title="CavinKare Ability Awards"
          description={CAVIN_CARES_ROW_DESC}
          href="#cavinkare-ability-awards"
          onNavigate={onNavigate}
        />
      </div>

      <div className="flex flex-col gap-4 lg:col-span-4">
        <div className={cardClass}>
          <MegaMenuLink
            title="CK Unavagam"
            description={CAVIN_CARES_ROW_DESC}
            href="#ck-unavagam"
            onNavigate={onNavigate}
            dense
          />
        </div>
        <div className={cardClass}>
          <div className="mb-3">
            <h3 className="text-base font-bold text-nav-link">Education & Empowerment</h3>
            <p className="mt-2 text-sm leading-normal text-nav-link opacity-[0.72]">{ORG_COLUMN_BLURB}</p>
          </div>
          <MegaMenuDivider className="my-4" />
          <MegaMenuLink
            title="CavinKare Educational Institutions"
            description={CAVIN_CARES_ROW_DESC}
            href="#cavinkare-educational-institutions"
            onNavigate={onNavigate}
            dense
          />
        </div>
      </div>

      <div className="lg:col-span-3">
        <MegaMenuColumnHeader title="Community Campaigns" blurb={ORG_COLUMN_BLURB} />
        <MegaMenuDivider className="my-3" />
        <MegaMenuLink
          title="CavinKare Walk India Campaign"
          description={CAVIN_CARES_ROW_DESC}
          href="#walk-india-campaign"
          onNavigate={onNavigate}
        />
        <MegaMenuDivider />
        <MegaMenuLink title="CSR" description={CAVIN_CARES_ROW_DESC} href="#csr" onNavigate={onNavigate} />
      </div>
    </div>
  )
}
