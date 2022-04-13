import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View} from 'react-native';
import { geonames } from '../constants/Interfaces';
import { CountriesProps } from '../constants/RootStack';

export default function CountriesScreen({ route, navigation }: CountriesProps) {
    const [userData, setUserData] = useState<geonames[]>([]);
    console.clear();
    console.log('User Data: ', userData);
    useEffect(()=>{
    axios
      .get<geonames[]>('http://api.geonames.org/searchJSON?username=weknowit&maxRows=3&q='+inputText)
      .then((response: AxiosResponse) => {
        setUserData(response.data);
      })

    }, []);
    const {inputText} = route.params;
    return (  
        <View>
          <Text>{inputText}</Text>
        </View>
    );
}
