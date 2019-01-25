/*
 * action types
 */

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

/*
 * other constants
 */

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

export const changeLanguage = language => ({
    type: CHANGE_LANGUAGE,
    language
});

// export const createSelectStep = step => ({
//     type: SELECT_ORDER_STEP,
//     data: step,
// });