import { SiteBanner } from './components/Banner/SiteBanner.jsx'
import { SiteNav } from './components/NavBar/SiteNav.jsx'

function App() {
  return (
    <div
      className="flex min-h-screen min-h-[100dvh] w-full min-w-[320px] flex-col bg-[rgb(var(--background-start-rgb))] text-[rgb(var(--foreground-rgb))] [background:linear-gradient(to_bottom,transparent,rgb(var(--background-end-rgb)))_rgb(var(--background-start-rgb))]"
    >
      <SiteBanner placement="top" />
      <SiteNav />
      <main className="flex w-full flex-1 flex-col items-center justify-center gap-4">
        Hello world!
      </main>
    </div>
  )
}

export default App
