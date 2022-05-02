import { NativeStackScreenProps } from "@react-navigation/native-stack";

/**
 * Type RootStackParamList containing routes and route parameters for the app. 
 */
export type RootStackParamList = {
    Home: undefined;
    SearchCity: undefined;
    SearchCountry: undefined;
    Countries: {inputText: string};
    City: {inputText: string};
};

export type CountriesProps = NativeStackScreenProps<RootStackParamList, 'Countries'>;
export type CityProps = NativeStackScreenProps<RootStackParamList, 'City'>