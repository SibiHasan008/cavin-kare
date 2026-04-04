import { useEffect, useState } from 'react'

export function useDesktopMegaMenu() {
  const [desktop, setDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : true,
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const fn = () => setDesktop(mq.matches)
    fn()
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])
  return desktop
}

export function MegaMenuDivider({ className = '' }) {
  return <hr className={`border-0 border-t border-nav-border ${className}`} />
}

export function MegaMenuLink({ title, description, href, onNavigate, dense = false }) {
  return (
    <a
      href={href}
      onClick={() => onNavigate?.()}
      className={`group flex items-start gap-3 no-underline text-inherit ${dense ? 'py-2' : 'py-4'}`}
    >
      <div className="min-w-0 flex-1">
        <div className="text-sm font-bold text-nav-link group-hover:text-nav-link-hover">
          {title}
        </div>
        <p className="mt-1 text-sm leading-snug text-nav-link opacity-[0.72]">{description}</p>
      </div>
      <div
        aria-hidden
        className="flex size-8 shrink-0 items-center justify-center rounded border border-nav-border text-[0.9rem] font-semibold text-nav-link opacity-85"
      >
        ›
      </div>
    </a>
  )
}

export function MegaMenuColumnHeader({ title, blurb }) {
  return (
    <div className="mb-3">
      <h3 className="mb-2 text-base font-bold text-nav-link">{title}</h3>
      <p className="text-sm leading-normal text-nav-link opacity-[0.72]">{blurb}</p>
    </div>
  )
}

export function MegaMenuVideoCard({ href, imageSrc, onNavigate }) {
  return (
    <div className="mt-auto pt-4">
      <a
        href={href}
        onClick={() => onNavigate?.()}
        className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-black/5"
      >
        <img src={imageSrc} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <span
            aria-hidden
            className="flex size-12 items-center justify-center rounded-full bg-white/90 text-xl text-[#002147]"
          >
            ▶
          </span>
        </div>
      </a>
    </div>
  )
}

export function MegaMenuGrid({ children }) {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 sm:p-6 md:p-8 lg:grid-cols-4 lg:gap-6 xl:gap-8">{children}</div>
  )
}
