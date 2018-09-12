import React from 'react';
import{View, Text, StyleSheet, Image} from 'react-native';
import LineDetail from '../components/LineDetail';

export default class PeopleDetailPage extends React.Component
{
    render()
    {
        const {people} =this.props.navigation.state.params; 
        return(
            <View style={styles.container}>
                <Image style={styles.imagem} source={{uri: people.picture.large}} />
                <View style={styles.containerDetail}>
                    <LineDetail label='Email:' />
                    <LineDetail content={people.email} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container:
    {
        padding: 15,
    },

    imagem:
    {
        aspectRatio:1,
    },

    containerDetail:
    {
        marginTop: 20,
        elevation: 1,
    }
});