import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/dark-logo.svg"
            alt="REDE AGRO"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>

        {/* Hamburger Menu */}
        <button
          type="button"
          className="text-[#032F35] hover:text-[#032F35]/80 hover:bg-[#032F35]/10 transition-colors p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#032F35]/50"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      </div>
    </header>
  )
}

