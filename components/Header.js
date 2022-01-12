import React from "react";
import { StyleSheet, View, TextInput, Image, Pressable } from "react-native";
import { useState } from "react";

const Header = ({ history, toggleSidebar }) => {
    const [searchTerm, setSearchTerm] = useState();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => {
                    toggleSidebar(true);
                }}
            >
                <Image
                    source={require("../assets/menu_black_24dp.svg")}
                    style={styles.img}
                />
            </Pressable>

            <TextInput
                style={styles.searchBar}
                onChange={setSearchTerm}
                placeholder="Type to Search"
            />

            <View style={styles.button}>
                <Image
                    source={require("../assets/search_black_24dp.svg")}
                    style={styles.img}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 75,
        borderBottomWidth: 0.2,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    },
    searchBar: {
        width: 190,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "rgba(0, 0, 0, 0.26)",
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#53C76C",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    img: {
        width: 32,
        height: 32,
    },
});

export default Header;
