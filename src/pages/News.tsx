import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Newsletter } from '@/components/Newsletter';

export default function News() {
  const { t, language } = useLanguage();

  const newsItems = [
    {
      title: language === 'en' ? 'New Digital ID System Launch' : 'አዲስ ዲጂታል መታወቂያ ስርዓት ጀምሯል',
      description: language === 'en' 
        ? 'Ethiopia launches a new digital identity system to streamline government services and improve security.'
        : 'ኢትዮጵያ የመንግስት አገልግሎቶችን ለማቀላጠፍ እና ደህንነትን ለማሻሻል አዲስ ዲጂታል መታወቂያ ስርዓት ጀመረች።',
      date: '2024-03-15',
      category: language === 'en' ? 'Technology' : 'ቴክኖሎጂ',
    },
    {
      title: language === 'en' ? 'Online Tax Filing Now Available' : 'የመስመር ላይ የግብር አቀራረብ አሁን ይገኛል',
      description: language === 'en'
        ? 'Citizens can now file their tax returns online through the eGov portal, making the process faster and more convenient.'
        : 'ዜጎች አሁን የግብር መመለሻቸውን በኢጎቭ በር በኩል በመስመር ላይ ማቅረብ ይችላሉ፣ ይህም ሂደቱን ፈጣን እና ምቹ ያደርገዋል።',
      date: '2024-03-10',
      category: language === 'en' ? 'Services' : 'አገልግሎቶች',
    },
    {
      title: language === 'en' ? 'Business License Processing Time Reduced' : 'የንግድ ፈቃድ ማቀናበር ጊዜ ቀንሷል',
      description: language === 'en'
        ? 'The government announces a 50% reduction in business license processing time thanks to digital transformation.'
        : 'መንግስት በዲጂታል ለውጥ ምክንያት የንግድ ፈቃድ ማቀናበር ጊዜን በ50% መቀነስ አወጀ।',
      date: '2024-03-05',
      category: language === 'en' ? 'Business' : 'ንግድ',
    },
    {
      title: language === 'en' ? 'Mobile App for Government Services' : 'ለመንግስት አገልግሎቶች ሞባይል መተግበሪያ',
      description: language === 'en'
        ? 'Download the new eGov Ethiopia mobile app to access all government services on the go.'
        : 'ሁሉንም የመንግስት አገልግሎቶች በእንቅስቃሴ ላይ ለማግኘት አዲሱን የኢጎቭ ኢትዮጵያ ሞባይል መተግበሪያ ያውርዱ።',
      date: '2024-02-28',
      category: language === 'en' ? 'Technology' : 'ቴክኖሎጂ',
    },
    {
      title: language === 'en' ? 'Improved Passport Services' : 'የተሻሻሉ የፓስፖርት አገልግሎቶች',
      description: language === 'en'
        ? 'Passport application and renewal process has been streamlined with new online features.'
        : 'የፓስፖርት ማመልከቻ እና የማደስ ሂደት በአዲስ የመስመር ላይ ባህሪያት ተቀላጥፏል።',
      date: '2024-02-20',
      category: language === 'en' ? 'Services' : 'አገልግሎቶች',
    },
    {
      title: language === 'en' ? 'Digital Payment Integration' : 'የዲጂታል ክፍያ ውህደት',
      description: language === 'en'
        ? 'Multiple payment gateways have been integrated to make government fee payments easier and more secure.'
        : 'የመንግስት ክፍያ ክፍያዎችን ቀላል እና ደህንነቱ የተጠበቀ ለማድረግ በርካታ የክፍያ መግቢያ መንገዶች ተዋህደዋል።',
      date: '2024-02-15',
      category: language === 'en' ? 'Finance' : 'ፋይናንስ',
    },
  ];

  return (
    <div className="flex-1">
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 animate-fade-up text-4xl font-bold md:text-5xl">
              {t('nav.news')}
            </h1>
            <p className="animate-fade-up text-lg text-muted-foreground" style={{ animationDelay: '0.1s' }}>
              {language === 'en' 
                ? 'Stay updated with the latest developments and announcements'
                : 'ከቅርብ ጊዜው ሂደቶች እና ማስታወቂያዎች ጋር ይዘምኑ'}
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="animate-fade-up flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button variant="ghost" className="group w-full justify-between">
                    {language === 'en' ? 'Read More' : 'ተጨማሪ ያንብቡ'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
