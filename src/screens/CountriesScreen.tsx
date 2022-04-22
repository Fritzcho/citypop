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

type State = {
  geonames: Array<geonames>,
  isLoading: boolean,
  inputText: string,
  countryCode: string,
  countryName: string,
  navigation: NavigationProp<ParamListBase>,
}

export default class CountriesScreen extends React.Component<any, State> {
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

// export default function CountriesScreen({ route, navigation }: CountriesProps) {
//   const [isLoading, setLoading] = useState(true);
//   const [geonames, setGeonames] = useState([]);
//   const [geo, setGeo] = useState<
//     Array<{
//       key: string,
//       value: geonames, 
//     }>
//   >([]);
//   const {inputText} = route.params; 

//   const getGeo = async () => {
//      try {
//       const response =  await fetch(
//         'http://api.geonames.org/searchJSON?username=weknowit&maxRows=10&q='
//         +inputText);
//       const json = await response.json();
//       setGeonames(json.geonames);
//       setGeo(json.geonames.map(function(item:geonames) {
//         return {
//           key: item.name,
//           value: item,
//         }
//       }))
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getGeo();
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       <Header content={inputText}/>
//       {/* {console.log(getCountryCode(geo[0].value))} */}

//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={geonames}
//           keyExtractor={( item: geonames) => item.name}
//           renderItem={({ item }: ListRenderItemInfo<geonames>) => (
//             <Text>{item.name}, {item.population}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// }
