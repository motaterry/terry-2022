export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src="/assets/Rede-agro0Logo.svg"
              alt="REDE AGRO"
              className="h-8 md:h-10 w-auto opacity-80"
              style={{
                filter: 'brightness(0) saturate(100%) invert(39%) sepia(62%) saturate(1438%) hue-rotate(58deg) brightness(94%) contrast(84%)'
              }}
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Dados públicos e colaboração entre produtores. 100% anônimo e transparente.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Data Sources Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Fontes de Dados
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                INMET
              </li>
              <li className="text-sm text-muted-foreground">
                CEPEA
              </li>
              <li className="text-sm text-muted-foreground">
                S2 (NASA)
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} RedeAgro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}




