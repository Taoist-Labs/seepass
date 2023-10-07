import i18n from 'i18next';
import en from '../locales/i18n/en.json';

import zh from '../locales/i18n/zh.json';
import {initReactI18next} from 'react-i18next';

const DEFAULT_LANGUAGE = "en";

async function getStoreLang() {
  const defaultLan = localStorage.getItem('lang');
  if(defaultLan){
    await i18n.changeLanguage(defaultLan);
  }
}

function saveStoreLang(lang:string) {
  // store.dispatch(saveLang(lang));
  localStorage.setItem("lang", lang);
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    zh: {
      translation: zh,
    },
  },
  compatibilityJSON: 'v3',
  lowerCaseLng: true,
  fallbackLng: DEFAULT_LANGUAGE,
  // lng: getStoreLang() || AppConfig.DEFAULT_LANGUAGE,
  lng: DEFAULT_LANGUAGE,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});
getStoreLang();
i18n.on('languageChanged', lang => {
  saveStoreLang(lang);
});
export default i18n;
