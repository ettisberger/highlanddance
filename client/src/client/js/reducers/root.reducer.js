import { CHANGE_LANGUAGE } from '../actions/actions';
import translationsDE from '../../assets/translations/de';
import translationsEN from '../../assets/translations/en';
import flattenMessages from '../common/translationService';

const translations = {
  de: translationsDE,
  en: translationsEN,
};

const initialState = {
  language: 'de',
  translations: flattenMessages(translations.de),
};


function rootReducer(state = initialState, { type, language }) {
  if (type === CHANGE_LANGUAGE) {
    return Object.assign({},
      state,
      { language, translations: flattenMessages(translations[language]) });
  }

  return state;
}

export default rootReducer;
