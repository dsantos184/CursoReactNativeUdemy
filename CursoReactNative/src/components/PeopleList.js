import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PeopleListItems from './PeopleListItems';

const PeopleList = props => {

    const {pessoas, listNavigator} = props;

    const list = pessoas.map((people, chave)=>
    
        <PeopleListItems key={chave} people={people} detailNavigator={listNavigator}/>
    );
          
    return (
        <View style={styles.container}>{list}</View>
    )
};

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: "#e6e6e6",
    },
});
export default PeopleList;