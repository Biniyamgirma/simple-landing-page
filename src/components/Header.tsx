import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flower2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext.tsx';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/news', label: t('nav.news') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Flower2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">eGov Ethiopia</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
                  isActive(item.path)
                    ? "bg-muted text-primary"
                    : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-4 font-medium"
            >
              {language === 'en' ? 'አማርኛ' : 'English'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-medium"
            >
              {language === 'en' ? 'አማ' : 'EN'}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="animate-fade-in border-t py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-muted",
                  isActive(item.path)
                    ? "bg-muted text-primary"
                    : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
