import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/constants/RootStack';
import { HomeScreen, SearchCityScreen, SearchCountryScreen, CityScreen, CountriesScreen} from './src/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {// extends React.Component{
  // const [userData, setUserData] = useState<geonames[]>([]);
  // console.clear();
  // console.log('User Data: ', userData);
  // useEffect(()=>{
  //   axios
  //     .get<geonames[]>('http://api.geonames.org/searchJSON?username=weknowit&q=London')
  //     .then((response: AxiosResponse) => {
  //       setUserData(response.data);
  //     })

  // }, []);
//   constructor(props: {} | Readonly<{}>) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       dataSource: null,
//     }
//   }

  // componentDidMount () {
  //   return fetch('http://api.geonames.org/searchJSON?username=weknowit')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         isLoading: false,
  //         dataSource: responseJson.geonames,
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }

  // render(){

    // if (this.state.isLoading  ) {
    //   return (
    //     <View style={styles.container}>
    //       <ActivityIndicator />
    //     </View>
    //   )
    // }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="SearchCity" component={SearchCityScreen}/>
          <Stack.Screen name="SearchCountry" component={SearchCountryScreen}/>
          <Stack.Screen name="City" component={CityScreen}/>
          <Stack.Screen name="Countries" component={CountriesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
//}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      paddingVertical: 30,
      paddingHorizontal: 30,
      backgroundColor: '#E7E7E7',    
  },
});

