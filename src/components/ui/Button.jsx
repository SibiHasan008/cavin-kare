import { twFillGradientBorder } from '../../utils/twGradientBorder.js'

const base =
  'inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition-[opacity,transform] hover:opacity-95 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047ab] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-nav-bg'

const secondaryRing = twFillGradientBorder('--cta-secondary-fill', '--cta-gradient')

/**
 * Pill CTA — navy → royal blue gradient fill, white label (reference: “Explore Our Brands”).
 */
export function PrimaryButton({ className = '', children, ...rest }) {
  return (
    <button
      type="button"
      className={`${base} text-white [background-image:var(--cta-gradient)] ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}

/**
 * Pill CTA — gradient stroke, page-matched fill, navy text (reference: “Our Impact Story”).
 */
export function SecondaryButton({ className = '', children, ...rest }) {
  return (
    <button
      type="button"
      className={`${secondaryRing} ${base} text-[#0a192f] dark:text-[#e8edf4] ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}
