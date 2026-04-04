import { useCallback, useLayoutEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { twFillGradientBorder } from '../../utils/twGradientBorder.js'
import { CavinCaresNavItem, OrganisationNavItem, ProductsNavItem } from './megaMenu/index.js'

const searchBtnRing = twFillGradientBorder('--nav-bg', '--nav-search-ring-gradient')
const themeToggleTrackRing = twFillGradientBorder('--nav-toggle-track', '--nav-search-ring-gradient')

const THEME_STORAGE_KEY = 'cavin-kare-theme'

/** Official CavinKare logo — host under `/public/cavinkare-logo.png` if you prefer an offline copy. */
const CAVINKARE_LOGO_SRC = 'https://cavinkare.com/wp-content/uploads/2017/01/logo.png'

function readStoredTheme() {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY)
    if (v === 'dark' || v === 'light') return v
  } catch {
    /* ignore */
  }
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function CavinKareLogo() {
  return (
    <a
      href="/"
      className="flex shrink-0 items-center rounded-lg no-underline outline-none focus-visible:ring-2 focus-visible:ring-nav-icon-ring focus-visible:ring-offset-2"
    >
      <img
        src={CAVINKARE_LOGO_SRC}
        alt="CavinKare — Making Lives Happier"
        className="h-9 w-auto max-w-[min(200px,55vw)] object-contain object-left sm:h-11 sm:max-w-[220px]"
        decoding="async"
      />
    </a>
  )
}

const NAV_ITEMS = [
  { label: 'Home', href: '/', dropdown: false },
  { label: 'Organisation', href: '#organisation', dropdown: true },
  { label: 'Products', href: '#products', dropdown: true },
  { label: 'Cavin Cares', href: '#cavin-cares', dropdown: true },
  { label: 'Careers', href: '#careers', dropdown: false },
  { label: 'Contact Us', href: '#contact', dropdown: false },
]

function NavChevron({ open = false }) {
  return (
    <Icon
      icon="material-symbols:expand-more"
      className={`size-4 shrink-0 opacity-70 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden
    />
  )
}

function ThemeToggle() {
  const [mode, setMode] = useState(() => readStoredTheme())

  useLayoutEffect(() => {
    const isDark = mode === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {
      /* ignore */
    }
  }, [mode])

  const setLight = useCallback(() => setMode('light'), [])
  const setDark = useCallback(() => setMode('dark'), [])

  return (
    <div className={`${themeToggleTrackRing} inline-flex rounded-full p-0.5`} role="group" aria-label="Theme">
      <button
        type="button"
        onClick={setLight}
        className={`flex size-8 items-center justify-center rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-nav-icon-ring focus-visible:ring-offset-2 ${mode === 'light' ? 'bg-nav-toggle-active shadow-sm' : 'bg-transparent'}`}
        aria-pressed={mode === 'light'}
        aria-label="Use light theme"
      >
        <Icon icon="entypo:light-up" className="size-[1.15rem] text-slate-600 dark:text-slate-300" aria-hidden />
      </button>
      <button
        type="button"
        onClick={setDark}
        className={`flex size-8 items-center justify-center rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-nav-icon-ring focus-visible:ring-offset-2 ${mode === 'dark' ? 'bg-nav-toggle-active shadow-sm dark:shadow-black/40' : 'bg-transparent'}`}
        aria-pressed={mode === 'dark'}
        aria-label="Use dark theme"
      >
        <Icon icon="material-symbols:dark-mode-outline" className="size-[1.05rem] text-slate-600 dark:text-slate-300" aria-hidden />
      </button>
    </div>
  )
}

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="w-full border-b border-nav-border bg-nav-bg"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-5 lg:gap-6 lg:py-2.5">
        <div className="flex min-w-0 flex-1 items-center justify-between gap-3 lg:flex-initial lg:justify-start">
          <CavinKareLogo />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-nav-link hover:bg-black/5 lg:hidden dark:hover:bg-white/10"
            aria-expanded={mobileOpen}
            aria-controls="site-nav-menu"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon icon={mobileOpen ? 'material-symbols:close' : 'material-symbols:menu'} className="size-6" aria-hidden />
          </button>
        </div>

        <div
          id="site-nav-menu"
          className={`${mobileOpen ? 'flex' : 'hidden'} w-full flex-col gap-1 border-t border-nav-border pt-3 lg:flex lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-1 lg:border-t-0 lg:pt-0 xl:gap-2`}
        >
          {NAV_ITEMS.map((item) =>
            item.label === 'Organisation' ? (
              <OrganisationNavItem
                key={item.label}
                className="flex w-full items-center justify-between gap-1 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-nav-link hover:bg-black/5 hover:text-nav-link-hover lg:w-auto lg:justify-center lg:py-2 dark:hover:bg-white/10"
                trigger={(open) => <NavChevron open={open} />}
              />
            ) : item.label === 'Products' ? (
              <ProductsNavItem
                key={item.label}
                className="flex w-full items-center justify-between gap-1 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-nav-link hover:bg-black/5 hover:text-nav-link-hover lg:w-auto lg:justify-center lg:py-2 dark:hover:bg-white/10"
                trigger={(open) => <NavChevron open={open} />}
              />
            ) : item.label === 'Cavin Cares' ? (
              <CavinCaresNavItem
                key={item.label}
                className="flex w-full items-center justify-between gap-1 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-nav-link hover:bg-black/5 hover:text-nav-link-hover lg:w-auto lg:justify-center lg:py-2 dark:hover:bg-white/10"
                trigger={(open) => <NavChevron open={open} />}
              />
            ) : item.dropdown ? (
              <button
                key={item.label}
                type="button"
                className="flex w-full items-center justify-between gap-1 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-nav-link hover:bg-black/5 hover:text-nav-link-hover lg:w-auto lg:justify-center lg:py-2 dark:hover:bg-white/10"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>{item.label}</span>
                <NavChevron />
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-nav-link no-underline hover:bg-black/5 hover:text-nav-link-hover lg:py-2 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        <div
          className={`${mobileOpen ? 'flex' : 'hidden'} w-full flex-wrap items-center justify-end gap-3 border-t border-nav-border pt-3 sm:flex-nowrap lg:flex lg:w-auto lg:border-t-0 lg:pt-0`}
        >
          <button
            type="button"
            className={`${searchBtnRing} flex size-10 items-center justify-center rounded-full text-nav-link transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nav-icon-ring focus-visible:ring-offset-2 active:opacity-75`}
            aria-label="Search"
          >
            <Icon icon="material-symbols:search" className="size-[1.35rem]" aria-hidden />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
