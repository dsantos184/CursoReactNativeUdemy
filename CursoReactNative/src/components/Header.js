import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={styles.containerHeader}>
        <Text style={styles.tituloHeader}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    containerHeader:
    {
        marginTop: 25,
        //backgroundColor: '#6ca2f7',
        backgroundColor: '#6c6c6c',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },

    tituloHeader:
    {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default Header;