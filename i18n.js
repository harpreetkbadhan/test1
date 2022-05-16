import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next';
//import de from './de.json';
import de from './translation.json';
import en from './en.json'
//SyncStorage.set('foo', 'bar');

i18n.use(initReactI18next).init({
   lng: 'de',
   fallbackLng: 'de',
   resources: {
       en: en,
       de:de,
   },
   interpolation: {
       escapeValue: false // react already safes from xss
   }
});

export default i18n;