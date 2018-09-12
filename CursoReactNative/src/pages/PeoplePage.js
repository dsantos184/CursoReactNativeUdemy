import React from 'react';
import { View } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';


export default class PeoplePage extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      pessoas: [],
    }
  }

  componentDidMount()
  {
    axios
    .get("https://randomuser.me/api/?nat=br&results=5")
    .then(response=>{
      const {results} = response.data;
      this.setState({
        pessoas: results,
      });
    });
  }

  render() {    
    return (
      <View>
        <PeopleList 
          pessoas={this.state.pessoas}  
          listNavigator={people=>{
            this.props.navigation.navigate('PeopleDetail', people)
          }} 
        />
      </View>
    );
  }
}
