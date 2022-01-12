import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const ItemDetailed = ({ history, location }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.header}/>
            <Image source={location.state.image} style={styles.img}/>
            <View style={styles.textContainer}>
                <Text style={styles.textOpaque}>Name:</Text>
                <Text style={styles.text}>{location.state.title}</Text>
                <Text style={styles.textOpaque}>Price:</Text>
                <Text style={styles.text}>$$$</Text>
                <Text style={styles.textOpaque}>Location:</Text>
                <Text style={styles.text}>X place Y street</Text>
                <Text style={styles.textOpaque}>Description:</Text>
                <Text>{location.state.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'
    },
    textContainer: {
        marginLeft: 30,
        marginRight: 30,
    },
    img: {
        width: 250,
        height: 250,
        backgroundColor: 'white',
        margin: 30,
    },
    textOpaque: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.35)',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    header: {
        width: '100%',
        height: 48,
        borderBottomWidth: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ItemDetailed;