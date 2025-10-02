import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.news': 'News & Updates',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Welcome to eGov Ethiopia',
    'hero.subtitle': 'Simplifying Your Government Services',
    'hero.description': 'Access, Apply, and Inquire – All in One Place',
    'hero.search': 'Search for a service (e.g., Passport, Business License)...',
    'hero.searchBtn': 'Search',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Access essential government services online',
    'services.passport': 'Passport Services',
    'services.passport.desc': 'Apply for new passports or renew existing ones',
    'services.business': 'Business License',
    'services.business.desc': 'Register and license your business',
    'services.documents': 'Civil Documents',
    'services.documents.desc': 'Birth certificates, marriage licenses, and more',
    'services.tax': 'Tax Services',
    'services.tax.desc': 'File taxes and manage tax records',
    'services.land': 'Land Registry',
    'services.land.desc': 'Property registration and land records',
    'services.support': 'Support Center',
    'services.support.desc': 'Get help with government services',
    'services.viewAll': 'View All Services',
    
    // About
    'about.title': 'About eGov Ethiopia',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To digitize and simplify citizen-government interaction, making services accessible, transparent, and efficient for all Ethiopians.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'A fully digital government that empowers citizens through technology and innovation.',
    'about.values': 'Our Values',
    'about.transparency': 'Transparency',
    'about.transparency.desc': 'Open and accountable governance',
    'about.efficiency': 'Efficiency',
    'about.efficiency.desc': 'Streamlined, fast services',
    'about.accessibility': 'Accessibility',
    'about.accessibility.desc': 'Services for everyone, everywhere',
    'about.innovation': 'Innovation',
    'about.innovation.desc': 'Modern solutions for modern times',
    
    // Newsletter
    'newsletter.title': 'Stay Informed',
    'newsletter.description': 'Subscribe to our newsletter for the latest updates on new services and public announcements.',
    'newsletter.placeholder': 'Your Email Address',
    'newsletter.subscribe': 'Subscribe',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.subject.general': 'General Inquiry',
    'contact.form.subject.complaint': 'Service Complaint',
    'contact.form.subject.technical': 'Technical Support',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Office Hours',
    'contact.hours.time': '8:30 AM - 5:30 PM, Monday - Friday',
    'contact.address': 'Physical Address',
    'contact.address.text': 'eGov Ethiopia Headquarters, Addis Ababa, Ethiopia',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.followUs': 'Follow Us',
    'footer.location': 'Our Location',
    'footer.copyright': '© 2024 eGov Ethiopia. Powerd By Lomify Tech Solutions.',
    'footer.helpline': 'Helpline: +251-11-XXX-XXXX',
  },
  am: {
    // Navigation
    'nav.home': 'መነሻ',
    'nav.about': 'ስለ እኛ',
    'nav.services': 'አገልግሎቶች',
    'nav.news': 'ዜናዎች እና ማሻሻያዎች',
    'nav.contact': 'ያግኙን',
    
    // Hero
    'hero.title': 'እንኳን ወደ ደብረብርሀን እቴጌ ጣይቱ ክፍለ ከተማ ሸዋረገድ ገድሌ ቀበሌ ድህረገጽ በደህና መጡ',
    'hero.subtitle': 'አግልግሎት አሰጣጥ ማሳወቂያ ቻርተር',
    'hero.description': 'የባለጉዳይ ማስታናገጃ ቀን፡ ሰኞ ረቡዕ፤አርበ -የቀጠና ቀን፡ ማስክኞ እና ሀሙስ -የማህበራዊ ፍ/ቤት አገልግሎት ሰኞ እና አርብ ከ7፡30 እስከ 11፡30',
    'hero.search': 'አገልግሎት ፈልግ (ለምሳሌ፡ የጠፋ መታወቂያ፣ ቅሬታ ማቅረብ...)',
    'hero.searchBtn': 'ፈልግ',
    
    // Services
    'services.title': 'የእኛ አገልግሎቶች',
    'services.subtitle': 'በ እቴጌ ጣይቱ ክፍለ ከተማ ሸዋረገድ ገድሌ ቀበሌ የምንሰጣቸው አገልግሎቶች ከታች ይመልክቱ።',
    'services.newId': 'አዲስ መታወቂያ መስጠት',
    'services.newId.desc': 'ባለጉዳይ ከሌላ ቀበሌ የመጣ ከሆነ ከመጣበት ቀበሌ መሸኛ እና በቀበሌያችን ነዋሪ የሆነ ሰው ተያዥ ማቅረብ ይኖርባቸዋል።',
    'services.mindDesc.newId': 'አግልግሎት የሚፈጀው ሰዓት 10 ደቂቃ',
    'services.business': 'የጠፋ መታወቂያ መስጠት',
    'services.business.desc': 'ባለጉዳይ ማመልከቻ እና ፋይል ቁጥር ይዞ መቅረብ አለበት',
    'services.mindDesc.oldId': 'አግልግሎት የሚፈጀው ሰዓት 10 ደቂቃ',

    'services.documents': 'የወሳኝ ኩነት ምዝገባ ልደት',
    'services.documents.desc': 'ባለጉዳይ ማመልከቻ ፣ ጉርድ ፎቶ እና የታደሰ መታወቂያ ይዞ መቅረብ አለበት',
    'services.mindDesc.brith': 'አግልግሎት የሚፈጀው ሰዓት 20 ደቂቃ',

    'services.tax': 'የወሳኝ ኩነት ምዝገባ ሞት',
    'services.tax.desc': 'ባለጉዳይ የቤተክርስትያን ማስረጃ እና የታደሰ መታወቂያ ይዞ መቅረብ አለበት',


    'services.land': 'የወሳኝ ኩነት ምዝገባ ጋብቻ',
    'services.land.desc': 'ባለጉዳይ የጋብቻ ውል ፣ ጉርድ ፎቶ የባልና የሚስት የታደሰ መታወቂያ እና የምስክሮች የታደሰመታወቂያ መቅረብ አለበት',


    'services.support': 'ከእዳ ነፃ ማስረጃ መስጠት',
    'services.support.desc': 'ባለጉዳይ ማመልከቻ እና የታደሰ መታወቂያ ይዞ መቅረብ አለበት',

    'services.registery':'የቤት ማህበር መረጃ ለመስጠት',
    'services.registery.desc': 'ባለጉዳይ ከአደራጅ መስሪያ ቤት ሸኜ ደብዳቤ ይዞ መቅረብ አለበት',


    'services.viewAll': 'ሁሉንም አገልግሎቶች ይመልከቱ',
    
    // About
    'about.title': 'ስለ ሸዋረገድ ገድሌ ቀበሌ',
    'about.mission': 'የእኛ ተልእኮ',
    'about.mission.text': 'ተገልጋዩች ቀልጣፋ እና ጥራት ያለው አገልግሎት ለመስጠት ተገልጋዮች ግልፀኝነት ያለው አገልግሎት ለመስጠት ተገልጋዮችን ተጠቃሚነት እርካታ ለማረጋገጥ።',
    
    'about.vision': 'የቀበሌው ተልዕኮ',
    'about.vision.text': 'በቀበሌው ውስጥ የሚሰሩ የመንግስት እና የድርጅት ግራዎችን እና የደንበኞችን አገልግሎት በብቃት፤በጥራት ጓና በተደራሽነት መፈፀም መቻል።',

    'about.charter':'የቀበሌው ራዕይ',
    'about.charter.text':'ቀበሌው ህዝብ ከመልካም አስተዳደር ችግር ወጥቶ ማት ጠቃሚነት ሲያረጋግጥ ማየት ቀበሌው ህዝብ ከድህነት እና ኃላቀርነት ተላቆ ማየት',

    'about.values': 'የእኛ እሴቶች',
    'about.transparency': 'ግልጽነት',
    'about.transparency.desc': 'ደንበኞችን በቅንነት እና በታማኝነት እናገለግላለን',
    'about.efficiency': 'ቅልጥፍና',
    'about.efficiency.desc': 'የተቀላጠፈ፣ ፈጣን አገልግሎት',
    'about.accessibility': 'ተደራሽነት',
    'about.accessibility.desc': 'ለሁሉም፣ በየትም ቦታ አገልግሎቶች',
    'about.innovation': 'ፈጠራ',
    'about.innovation.desc': 'ለዘመናዊ ጊዜያት ዘመናዊ መፍትሔዎች',
    
    // Newsletter
    'newsletter.title': 'መረጃ ያግኙ',
    'newsletter.description': 'ለአዳዲስ አገልግሎቶች እና የህዝብ ማስታወቂያዎች የእለት ዜና መጽሔታችንን ይመዝገቡ።',
    'newsletter.placeholder': 'የእርስዎ ኢሜይል አድራሻ',
    'newsletter.subscribe': 'ይመዝገቡ',
    
    // Contact
    'contact.title': 'ያግኙን',
    'contact.subtitle': 'ለእርዳታ እዚህ ነን',
    'contact.form.name': 'ሙሉ ስም',
    'contact.form.email': 'የኢሜይል አድራሻ',
    'contact.form.subject': 'ርዕስ',
    'contact.form.subject.general': 'አጠቃላይ ጥያቄ',
    'contact.form.subject.complaint': 'የአገልግሎት ቅሬታ',
    'contact.form.subject.technical': 'የቴክኒክ ድጋፍ',
    'contact.form.message': 'መልእክት',
    'contact.form.send': 'መልእክት ላክ',
    'contact.info.title': 'የመገኛ መረጃ',
    'contact.phone': 'ስልክ',
    'contact.email': 'ኢሜይል',
    'contact.hours': 'የቢሮ ሰዓት',
    'contact.hours.time': '8:30 ጠዋት - 5:30 ምሽት፣ ሰኞ - አርብ',
    'contact.address': 'አድራሻ',
    'contact.address.text': 'S',
    
    // Footer
    'footer.quickLinks': 'ቀልጣፋ አገናኞች',
    'footer.followUs': 'ተከተሉን',
    'footer.location': 'የእኛ አድራሻ',
    'footer.copyright': '© 2018 E.C ደብረብርሀን እቴጌ ጣይቱ ክፍለ ከተማ ሸዋረገድ ገድሌ ቀበሌ, ኢትዮጵያ። በ ሎሚፋይ ዌብ ሳሉሽን የተሰራ።', 
    'footer.helpline': 'የእገዛ መስመር: +251-11-XXX-XXXX',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('am');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'am' ? 'en' : 'am');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
