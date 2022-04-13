import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    SearchCity: undefined;
    SearchCountry: undefined;
    Countries: {inputText: string};
    City: {inputText: string};
};

export type CountriesProps = NativeStackScreenProps<RootStackParamList, 'Countries'>;