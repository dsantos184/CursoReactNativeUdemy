import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LineDetail = props =>
{
    const {label, content} = props;
    return(
        <View style={styles.containerLine}>
            <Text style={[styles.cell, styles.label]}>{label}</Text>
            <Text style={styles.cell}>{content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerLine:
    {
        backgroundColor: '#e2f9ff',//'#D8D8D8',
        flexDirection: 'row'
    }
})


export default LineDetail;