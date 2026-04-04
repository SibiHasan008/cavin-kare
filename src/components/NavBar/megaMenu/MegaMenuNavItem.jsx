import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { CavinCaresMegaMenuContent } from './CavinCaresMegaMenu.jsx'
import { OrganisationMegaMenuContent } from './OrganisationMegaMenu.jsx'
import { ProductsMegaMenuContent } from './ProductsMegaMenu.jsx'
import { useDesktopMegaMenu } from './primitives.jsx'

/**
 * @param {object} props
 * @param {string} props.label
 * @param {import('react').ReactNode | ((menuOpen: boolean) => import('react').ReactNode)} props.trigger
 * @param {string} props.className
 * @param {import('react').ComponentType<{ onNavigate?: () => void }>} props.ContentComponent
 * @param {string} props.closeMenuAriaSuffix
 */
export function MegaMenuNavItem({ label, trigger, className, ContentComponent, closeMenuAriaSuffix }) {
  const menuId = useId()
  const [mounted, setMounted] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [anchorPosition, setAnchorPosition] = useState({ top: 0, left: 0 })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const desktop = useDesktopMegaMenu()

  useEffect(() => {
    setMounted(true)
  }, [])

  const closePopover = useCallback(() => setPopoverOpen(false), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  const handleOpen = useCallback(
    (event) => {
      if (desktop) {
        if (popoverOpen) {
          closePopover()
        } else {
          const rect = event.currentTarget.getBoundingClientRect()
          setAnchorPosition({
            top: rect.bottom + 12,
            left: window.innerWidth / 2,
          })
          setPopoverOpen(true)
        }
      } else {
        setDrawerOpen(true)
      }
    },
    [desktop, popoverOpen, closePopover],
  )

  const handleNavigate = useCallback(() => {
    closePopover()
    closeDrawer()
  }, [closePopover, closeDrawer])

  useEffect(() => {
    if (!popoverOpen || !desktop) return
    const onResize = () => {
      setAnchorPosition((p) => ({ ...p, left: window.innerWidth / 2 }))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [popoverOpen, desktop])

  const menuOpen = desktop ? popoverOpen : drawerOpen

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closePopover()
        closeDrawer()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen, closePopover, closeDrawer])

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const closeLabel = closeMenuAriaSuffix ?? label
  const triggerNode = typeof trigger === 'function' ? trigger(menuOpen) : trigger

  const portalTarget = mounted ? document.body : null

  return (
    <>
      <button
        type="button"
        className={className}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={handleOpen}
      >
        <span>{label}</span>
        {triggerNode}
      </button>

      {portalTarget && popoverOpen && desktop
        ? createPortal(
            <>
              <button
                type="button"
                tabIndex={-1}
                aria-hidden
                className="fixed inset-0 z-[1000] cursor-default bg-transparent"
                onClick={closePopover}
              />
              <div
                id={menuId}
                role="dialog"
                aria-modal="true"
                aria-label={label}
                className="fixed z-[1001] max-h-[min(85vh,calc(100vh-48px))] w-[min(1160px,calc(100vw-32px))] max-w-[calc(100vw-32px)] overflow-hidden overflow-y-auto rounded-lg border border-nav-border bg-nav-bg text-nav-link shadow-xl"
                style={{
                  top: anchorPosition.top,
                  left: anchorPosition.left,
                  transform: 'translateX(-50%)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <ContentComponent onNavigate={handleNavigate} />
              </div>
            </>,
            portalTarget,
          )
        : null}

      {portalTarget && drawerOpen && !desktop
        ? createPortal(
            <div className="fixed inset-0 z-[1000] flex flex-col justify-end">
              <button
                type="button"
                tabIndex={-1}
                aria-hidden
                className="absolute inset-0 cursor-default bg-black/40"
                onClick={closeDrawer}
              />
              <div
                id={menuId}
                role="dialog"
                aria-modal="true"
                aria-label={label}
                className="relative z-[1] flex max-h-[90vh] flex-col rounded-t-2xl bg-nav-bg text-nav-link shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end px-4 pt-4">
                  <button
                    type="button"
                    onClick={closeDrawer}
                    aria-label={`Close ${closeLabel} menu`}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-nav-link hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
                <div className="min-h-0 flex-1 overflow-y-auto">
                  <ContentComponent onNavigate={handleNavigate} />
                </div>
              </div>
            </div>,
            portalTarget,
          )
        : null}
    </>
  )
}

export function OrganisationNavItem(props) {
  return (
    <MegaMenuNavItem
      {...props}
      label="Organisation"
      ContentComponent={OrganisationMegaMenuContent}
      closeMenuAriaSuffix="Organisation"
    />
  )
}

export function ProductsNavItem(props) {
  return (
    <MegaMenuNavItem
      {...props}
      label="Products"
      ContentComponent={ProductsMegaMenuContent}
      closeMenuAriaSuffix="Products"
    />
  )
}

export function CavinCaresNavItem(props) {
  return (
    <MegaMenuNavItem
      {...props}
      label="Cavin Cares"
      ContentComponent={CavinCaresMegaMenuContent}
      closeMenuAriaSuffix="Cavin Cares"
    />
  )
}
