import { Terminal, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header({ isScrolled = false }: { isScrolled?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 bg-card border-b border-border shadow-sm transition-all duration-300 z-40 ${isScrolled ? 'py-2 scale-[0.95]' : 'py-0'}`}>
      <div className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{t('header.title')}</h1>
              <p className="text-muted-foreground">{t('header.subtitle')}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border border-border shadow-lg z-50">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="hover:bg-accent cursor-pointer">
                  <span className={language === 'en' ? 'font-semibold' : ''}>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('de')} className="hover:bg-accent cursor-pointer">
                  <span className={language === 'de' ? 'font-semibold' : ''}>Deutsch</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border border-border shadow-lg z-50">
                <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-accent cursor-pointer">
                  <span className={theme === 'light' ? 'font-semibold' : ''}>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-accent cursor-pointer">
                  <span className={theme === 'dark' ? 'font-semibold' : ''}>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-accent cursor-pointer">
                  <span className={theme === 'system' ? 'font-semibold' : ''}>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
