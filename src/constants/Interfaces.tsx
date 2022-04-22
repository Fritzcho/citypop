/**
 * Interface geonames used to fetch data from GeoNames API
 */
export interface geonames {
    adminCode: string,
    lng: string,
    geonameId: number,
    toponymName: string,
    countryId: string,
    fcl: string,
    population: number,
    countryCode: string,
    name: string,
    fclName: string,
    adminCodes1: {
        ISO3166_2:string,
    },
    countryName: string,
    fcodeName: string,
    adminName1: string,
    lat: string,
    fcode: string
}