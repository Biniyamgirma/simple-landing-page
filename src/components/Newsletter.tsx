import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export const Newsletter = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    }
  };

  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto mb-4 h-12 w-12" />
          <h2 className="mb-2 text-3xl font-bold">{t('newsletter.title')}</h2>
          <p className="mb-6 opacity-90">
            {t('newsletter.description')}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder={t('newsletter.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap">
              {t('newsletter.subscribe')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
