import React from 'react';
import { 
  ActivityIndicator, 
  View,
  Text,
  StyleSheet } from 'react-native';
import { geonames } from '../constants/Interfaces';
import { Header } from '../components'
import { ConnectionStrings } from '../helper/Variables';
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type State = {
  geonames: Array<geonames>,
  isLoading: boolean,
  inputText: string,
  cityName: string,
  population: number,
  navigation: NavigationProp<ParamListBase>,
}

export default class CityScreen extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      geonames: [],
      isLoading: true,
      inputText: props.route.params.inputText,
      cityName: "",
      population: 0,
      navigation: props.navigation,
    }
  }

  async getCity() {
    try {
      const response =  await fetch(
        ConnectionStrings.GET_CITY
        +this.state.inputText);
      const json = await response.json();
      this.setState({geonames: json.geonames});
    } catch (error) {
      console.error(error);
    } finally {
        console.log(this.state.geonames);
        if (this.state.geonames.length === 0) {
            this.setState({cityName: "City not found"});
            this.setState({isLoading: true});
        } else {
            this.setState({isLoading: false});
        }
    }
  }

  async componentDidMount() {
    await this.getCity();
    if (this.state.isLoading === false) {
        this.setState({cityName: this.state.geonames[0].name});
        this.setState({population: this.state.geonames[0].population});
    }
  }

  render () {
    return(
      <View style={{ flex: 1, padding: 24 }}>
        <Header content={this.state.cityName}/>
        {this.state.isLoading ? <ActivityIndicator size="large" color="#0000ff"/> : (
            <View style={styles.populationContainer}>
                <View style={styles.innerContainer}>
                <Text style={styles.population}>Population:</Text>
                <Text style={styles.population}>{this.state.population}</Text>
                </View>
            </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    populationContainer: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    innerContainer: {
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
    },
    population: {
        fontSize: 25,
        fontWeight: 'bold',
        padding:15,
    }
});
