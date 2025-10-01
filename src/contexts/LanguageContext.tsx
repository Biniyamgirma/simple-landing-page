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
    'footer.copyright': '© 2024 eGov Ethiopia. All rights reserved.',
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
    'hero.title': 'እንኳን ወደ eGov ኢትዮጵያ በደህና መጡ',
    'hero.subtitle': 'የመንግስት አገልግሎቶችን ቀላል ያደርገዋል',
    'hero.description': 'መድረስ፣ ማመልከት እና መጠየቅ - ሁሉም በአንድ ስፍራ',
    'hero.search': 'አገልግሎት ፈልግ (ለምሳሌ፡ ፓስፖርት፣ የንግድ ፈቃድ...)',
    'hero.searchBtn': 'ፈልግ',
    
    // Services
    'services.title': 'የእኛ አገልግሎቶች',
    'services.subtitle': 'አስፈላጊ የመንግስት አገልግሎቶችን በመስመር ላይ ያግኙ',
    'services.passport': 'የፓስፖርት አገልግሎቶች',
    'services.passport.desc': 'አዲስ ፓስፖርት ያመልክቱ ወይም ያሉትን ያድሱ',
    'services.business': 'የንግድ ፈቃድ',
    'services.business.desc': 'ንግድዎን ያስመዝግቡ እና ፈቃድ ያግኙ',
    'services.documents': 'የሲቪል ሰነዶች',
    'services.documents.desc': 'የልደት የምስክር ወረቀት፣ የጋብቻ ፈቃድ እና ሌሎችም',
    'services.tax': 'የግብር አገልግሎቶች',
    'services.tax.desc': 'ግብር ያስገቡ እና የግብር መዝገቦችን ያስተዳድሩ',
    'services.land': 'የመሬት መዝገብ',
    'services.land.desc': 'የንብረት ምዝገባ እና የመሬት መዝገቦች',
    'services.support': 'የድጋፍ ማዕከል',
    'services.support.desc': 'በመንግስት አገልግሎቶች እገዛ ያግኙ',
    'services.viewAll': 'ሁሉንም አገልግሎቶች ይመልከቱ',
    
    // About
    'about.title': 'ስለ eGov ኢትዮጵያ',
    'about.mission': 'የእኛ ተልእኮ',
    'about.mission.text': 'የዜጎች-መንግስት ግንኙነትን ዲጂታላይዝ እና ቀላል ማድረግ፣ አገልግሎቶችን ለሁሉም ኢትዮጵያውያን ተደራሽ፣ ግልጽ እና ቀልጣፋ ማድረግ።',
    'about.vision': 'የእኛ ራዕይ',
    'about.vision.text': 'በቴክኖሎጂ እና በፈጠራ ዜጎችን የሚያበረታታ ሙሉ በሙሉ ዲጂታል መንግስት።',
    'about.values': 'የእኛ እሴቶች',
    'about.transparency': 'ግልጽነት',
    'about.transparency.desc': 'ክፍት እና ተጠያቂ አስተዳደር',
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
    'contact.address.text': 'የ eGov ኢትዮጵያ ዋና መሥሪያ ቤት፣ አዲስ አበባ፣ ኢትዮጵያ',
    
    // Footer
    'footer.quickLinks': 'ቀልጣፋ አገናኞች',
    'footer.followUs': 'ተከተሉን',
    'footer.location': 'የእኛ አድራሻ',
    'footer.copyright': '© 2024 eGov ኢትዮጵያ። ሁሉም መብቶች የተጠበቁ ናቸው።',
    'footer.helpline': 'የእገዛ መስመር: +251-11-XXX-XXXX',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
