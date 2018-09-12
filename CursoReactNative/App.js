import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { createStackNavigator } from 'react-navigation';
import {UpcaseFirstCaracter} from './src/util'



export default createStackNavigator({

  Home:
  {
    screen: PeoplePage,
  },

  PeopleDetail:
  {
    screen: PeopleDetailPage,
    navigationOptions: ({navigation}) =>
    {
      const name = UpcaseFirstCaracter(navigation.state.params.people.name.first);
      return({
        title: name,
      });
    }
  }
},
{
  navigationOptions:
  {
    title: 'Home',
    headerTintColor: "#fff",
    headerStyle:
    {
      backgroundColor: '#6ca2f7',       
    },
    headerTitleStyle:
    {
      color: "#fff",
      alignSelf: "center",
    }
  } 
});
