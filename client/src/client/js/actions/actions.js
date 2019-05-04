/*
 * action types
 */

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

/*
 * other constants
 */

/*
 * action creators
 */

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  language,
});
