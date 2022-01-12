import React from "react";
import { StyleSheet, Text, Image, Pressable } from "react-native";

const Store = ({ title, description, image, remaining, history }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={() => {
                history.push("/Detailes/:id");
            }}
        >
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Image source={image} style={styles.img} />
            <Text style={{ fontSize: 12, fontFamily: "Roboto" }}>
                REMAINING: {remaining}
            </Text>
            <Text style={styles.desc} numberOfLines={4}>
                {description}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 200,
        borderRadius: 10,
        backgroundColor: "#53C76C",
        alignItems: "center",
        margin: 5,
    },
    img: {
        width: 125,
        height: 80,
        backgroundColor: "white",
        borderRadius: 5,
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
        margin: 6,
        fontFamily: "Roboto",
    },
    desc: {
        fontSize: 10,
        maxHeight: 100,
    },
});

export default Store;
