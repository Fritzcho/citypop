import React from 'react';
import { 
  ActivityIndicator, 
  FlatList, 
  ListRenderItemInfo, 
  View } from 'react-native';
import { geonames } from '../constants/Interfaces';
import { CountryItem, Header } from '../components'
import { ConnectionStrings } from '../helper/Variables';
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { isLoaded } from 'expo-font';
import { StackRouterWParams } from '../constants/StackRouter';

type State = {
  geonames: Array<geonames>,
  isLoading: boolean,
  inputText: string,
  countryCode: string,
  countryName: string,
  navigation: NavigationProp<ParamListBase>,
}

/**
 * React-Native component countriesScreen displays a list of the top 20 most populated cities
 * in a country, fetched from the GeoNames API based on a usergiven countryname. Users can click any
 * listed city to be redirected to CityScreen with the selected cityname as a searchstring.
 * 
 * If no country is found based on the usergiven searchstring, displays "Country not found"
 * 
 * @param StackRouterWParams Type defining types for props
 * @param State Type defining types for state variables
 * 
 */
export default class CountriesScreen extends React.Component<StackRouterWParams, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      geonames: [],
      isLoading: true,
      inputText: props.route.params.inputText,
      countryCode: "",
      countryName: "",
      navigation: props.navigation,
    }
  }

  /**
   * Get most relevant countrycode based on usergiven countryname.
   */
  async getCountry() {
    try {
      const response =  await fetch(
        ConnectionStrings.GET_COUNTRY
        +this.state.inputText);
      const json = await response.json();
      this.setState({geonames: json.geonames});
      if (this.state.geonames.length === 0) {
        this.setState({countryName: "Country not found"});
        this.setState({isLoading: false});
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Get list of most populated cities in a country, based on the countrycode
   * previously extracted with the help of user-given countryname.
   */
  async getCities() {
    try {
      const response =  await fetch(
        ConnectionStrings.GET_CITIES
        +this.state.countryCode);
      const json = await response.json();
      this.setState({geonames: json.geonames});
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  /**
   * Run when component mounts
   */
  async componentDidMount() {
    await this.getCountry();
    if (this.state.isLoading === true) {
      this.setState({countryCode: this.state.geonames[0].countryCode});
      this.setState({countryName: this.state.geonames[0].countryName});
      await this.getCities();
    }
  }

  render () {
    return(
      <View style={{ flex: 1, padding: 24 }}>
        <Header content={this.state.countryName}/>

        {this.state.isLoading ? <ActivityIndicator  size="large" color="#0000ff"/> : (
          <FlatList
            data={this.state.geonames}
            keyExtractor={( item: geonames) => item.name}
            renderItem={({ item }: ListRenderItemInfo<geonames>) => (
              <CountryItem 
                content={item.name} 
                route='City' 
                inputText={item.name} 
                navigation={this.state.navigation}
              />
            )}
          />
        )}
      </View>
    );
  }
}