import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem, ListRenderItemInfo, Text, View, } from 'react-native';
import { geonames } from '../constants/Interfaces';
import { CountriesProps } from '../constants/RootStack';

export default function CountriesScreen({ route, navigation }: CountriesProps) {
  const [isLoading, setLoading] = useState(true);
  const [geonames, setGeonames] = useState([]);

  const {inputText} = route.params;
  const getMovies = async () => {
     try {
      const response =  await fetch('http://api.geonames.org/searchJSON?username=weknowit&maxRows=10&q='+inputText);
      const json = await response.json();
      setGeonames(json.geonames);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={geonames}
          keyExtractor={( item: geonames) => item.name}
          renderItem={({ item }: ListRenderItemInfo<geonames>) => (
            <Text>{item.name}, {item.population}</Text>
          )}
        />
      )}
    </View>
  );
}
