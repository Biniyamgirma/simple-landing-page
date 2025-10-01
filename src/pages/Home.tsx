import { Search, FileText, Briefcase, FileCheck, Calculator, Home as HomeIcon, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Newsletter } from '@/components/Newsletter';
import { Link } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.jpg';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t('services.passport'),
      description: t('services.passport.desc'),
    },
    {
      icon: Briefcase,
      title: t('services.business'),
      description: t('services.business.desc'),
    },
    {
      icon: FileCheck,
      title: t('services.documents'),
      description: t('services.documents.desc'),
    },
    {
      icon: Calculator,
      title: t('services.tax'),
      description: t('services.tax.desc'),
    },
    {
      icon: HomeIcon,
      title: t('services.land'),
      description: t('services.land.desc'),
    },
    {
      icon: HeadphonesIcon,
      title: t('services.support'),
      description: t('services.support.desc'),
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Hero background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h1 className="mb-4 animate-fade-up text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mb-2 animate-fade-up text-xl font-semibold md:text-2xl" style={{ animationDelay: '0.1s' }}>
              {t('hero.subtitle')}
            </p>
            <p className="mb-8 animate-fade-up text-lg opacity-90 md:text-xl" style={{ animationDelay: '0.2s' }}>
              {t('hero.description')}
            </p>
            
            {/* Search Bar */}
            <div className="animate-fade-up mx-auto flex max-w-2xl flex-col gap-2 sm:flex-row" style={{ animationDelay: '0.3s' }}>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('hero.search')}
                  className="h-12 bg-background pl-10 text-foreground"
                />
              </div>
              <Button size="lg" variant="secondary" className="h-12 whitespace-nowrap">
                {t('hero.searchBtn')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">{t('services.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
