/**
 * Fetching strings used in the application.
 */
export const ConnectionStrings = {
    GET_COUNTRY: 'http://api.geonames.org/searchJSON?username=weknowit&maxRows=1&featureClass=A&name_equals=',
    GET_CITIES: 'http://api.geonames.org/searchJSON?username=weknowit&maxRows=20&featureClass=P&orderby=population&country=',
    GET_CITY: 'http://api.geonames.org/searchJSON?username=weknowit&maxRows=1&featureClass=P&orderby=population&q=',
}
