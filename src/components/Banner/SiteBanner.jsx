import { Icon } from '@iconify/react'

const barSurface =
  'w-full border-site-banner-border bg-[linear-gradient(90deg,var(--site-banner-bg-from)_0%,var(--site-banner-bg-mid)_50%,var(--site-banner-bg-to)_100%)] text-[0.8125rem] leading-snug text-site-banner-fg'

const innerRow =
  'flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 px-3 py-2 sm:px-4 md:gap-x-6 max-[900px]:justify-center'

function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}

/**
 * Utility strip (language, notices, region). Use `placement` to pin it to the top or bottom of the layout.
 *
 * @param {'top' | 'bottom'} [props.placement='top'] — Top uses `role="banner"`; bottom uses `role="region"`.
 * @param {string} [props.className] — Extra classes on the outer element.
 * @param {string} [props.ariaLabel] — Accessible name when `placement="bottom"` (default: "Site utility bar").
 */
export function SiteBanner({ placement = 'top', className, ariaLabel }) {
  const isTop = placement === 'top'
  const outerClass = cn(barSurface, isTop ? 'border-b' : 'border-t', className)

  const inner = (
    <div className={innerRow}>
      <div className="shrink-0">
        <button
          type="button"
          className="-mx-1.5 -my-0.5 inline-flex cursor-pointer items-center gap-1.5 rounded-md border-0 bg-transparent px-1.5 py-0.5 text-inherit whitespace-nowrap hover:bg-site-banner-control-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-site-banner-focus-ring"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-label="Choose language, currently English"
        >
          <Icon icon="emojione:flag-for-united-kingdom" className="size-4 shrink-0 opacity-95" aria-hidden />
          <span>Language: English</span>
          <Icon icon="material-symbols:expand-more" className="size-2.5 shrink-0 opacity-90" aria-hidden />
        </button>
      </div>

      <div className="flex min-w-0 flex-1 basis-0 flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center max-[900px]:order-3 max-[900px]:basis-full max-[900px]:-mt-1 max-[900px]:border-t max-[900px]:border-site-banner-divider max-[900px]:pt-2 min-[901px]:justify-start min-[901px]:text-left">
        <a
          className="font-semibold text-inherit no-underline whitespace-nowrap hover:underline focus-visible:outline-none max-[480px]:text-center max-[480px]:whitespace-normal min-[901px]:shrink-0"
          href="#chinni-krishnan-awards"
        >
          Apply for Chinni Krishnan Innovation Awards
        </a>
        <div className="flex min-w-0 flex-1 items-center gap-2 max-[900px]:w-full max-[900px]:flex-none max-[900px]:justify-center min-[901px]:justify-start">
          <Icon icon="icon-park-outline:dot" className="size-3 shrink-0 opacity-85" aria-hidden />
          <p className="m-0 min-w-0 flex-1 text-pretty font-normal text-site-banner-muted max-[480px]:text-xs max-[900px]:text-center min-[901px]:text-left">
            CavinKare is committed to full regulatory compliance, ESG transparency, and sustainable growth –
            Explore our audited reports, certifications, and disclosures.
          </p>
        </div>
      </div>

      <div className="shrink-0">
        <button
          type="button"
          className="-mx-1.5 -my-0.5 inline-flex cursor-pointer items-center gap-1.5 rounded-md border-0 bg-transparent px-1.5 py-0.5 text-inherit whitespace-nowrap hover:bg-site-banner-control-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-site-banner-focus-ring"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-label="Choose region, currently India"
        >
          <Icon icon="tabler:world" className="size-4 shrink-0 opacity-95" aria-hidden />
          <span>India</span>
          <Icon icon="material-symbols:expand-more" className="size-2.5 shrink-0 opacity-90" aria-hidden />
        </button>
      </div>
    </div>
  )

  if (isTop) {
    return (
      <header className={outerClass} role="banner">
        {inner}
      </header>
    )
  }

  return (
    <div className={outerClass} role="region" aria-label={ariaLabel ?? 'Site utility bar'}>
      {inner}
    </div>
  )
}

/** Same as `<SiteBanner placement="top" />`. */
export function TopBanner(props) {
  return <SiteBanner placement="top" {...props} />
}

/** Same as `<SiteBanner placement="bottom" />`. */
export function BottomBanner(props) {
  return <SiteBanner placement="bottom" {...props} />
}
