import React from 'react';
import{View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {UpcaseFirstCaracter} from '../util';

const PeopleListItems = props =>{
    const {people, detailNavigator} = props;

    const{title, first, last} = people.name;

    //criar função para colocar a primeira letra da string como  maiúscula
    return (
        <TouchableOpacity onPress={()=>{detailNavigator({people})}}>
            <View style={styles.containerList}>
                <Image style={styles.avatar} source={{uri: people.picture.thumbnail}} />
                <Text style={styles.itemText}>{` ${
                        UpcaseFirstCaracter(title)
                    } ${
                        UpcaseFirstCaracter(first)
                    } ${
                        UpcaseFirstCaracter(last)
                    }`
                }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerList:
    {
        paddingLeft:20,
        borderBottomWidth:1,
        borderBottomColor: "#fff",
        flexDirection: 'row',
        height:60,
        alignItems: 'center',
    },

    itemText:
    {
        flex:7,
        paddingLeft:10,
    },

    avatar:
    {
        aspectRatio:1,
        flex:1,
        borderRadius: 50,
    },
});


export default PeopleListItems;