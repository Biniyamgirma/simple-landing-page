import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Send, Flower2, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Send, href: '#', label: 'Telegram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/news', label: t('nav.news') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <img src="/images/logo.webp" alt="Amhara Region Logo"  />
              </div>
              <span className="text-lg font-bold text-primary">ሸዋረገድ ገድሌ ቀበሌ</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('hero.description')}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{t('footer.helpline')}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.followUs')}
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Location */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t('footer.location')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('contact.address.text')}
            </p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-8 overflow-hidden rounded-xl border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3658.671094038202!2d39.53513062709055!3d9.681575669242216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNDAnNTMuNyJOIDM5wrAzMicxNC43IkU!5e0!3m2!1sam!2set!4v1759392354932!5m2!1sam!2set"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="shewareged gedle kebele Ethiopia Location"
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
         <a href="https://lomify.com.et/"><p>{t('footer.copyright')}</p></a> 
        </div>
      </div>
    </footer>
  );
};
