import React from "react";
import { useContext } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { UserContext } from "./UserContex";
import { SetLoginToken, GetLoginToken, RemoveLoginToken } from "../AsyStorage/Storage";

const Sidebar = ({ history }) => {
    const { sidebarOpen, setHomePage, setSidebarOpen } = useContext(UserContext);

    const Logout = () => {
        RemoveLoginToken();
        history.push("/");
        setHomePage(true);
        setSidebarOpen(false);
    }

    if (sidebarOpen) {
        return (
            <View style={styles.container}>
                <View style={styles.rows}>
                    <Image
                        source={require("../assets/account_circle_white_24dp.svg")}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>USERNAME</Text>
                </View>

                <Pressable style={styles.buttonBox}>
                    <Image
                        source={require("../assets/home_white_24dp.svg")}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>HOME</Text>
                </Pressable>

                <Pressable style={styles.buttonBox}>
                    <Image
                        source={require("../assets/history_white_24dp.svg")}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>ORDER HISTORY</Text>
                </Pressable>

                <Pressable style={styles.buttonBox}>
                    <Image
                        source={require("../assets/shopping_cart_white_24dp.svg")}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>CART</Text>
                </Pressable>

                <Pressable style={styles.buttonBoxBottom}>
                    <Image
                        source={require("../assets/location_on_white_24dp.svg")}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>MAPS</Text>
                </Pressable>

                <Pressable style={styles.logoutBox} onPress={Logout}>
                    <Image
                        source={require("../assets/logout_white_24dp.svg")}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>LOGOUT</Text>
                </Pressable>
            </View>
        );
    } else {
        return null;
    }
};

const styles = StyleSheet.create({
    container: {
        width: 210,
        height: "100%",
        backgroundColor: "#3CCF5D",
        position: "absolute",
        top: 0,
        bottom: 0,
    },
    rows: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        marginBottom: 50,
        marginTop: 10,
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    text: {
        fontSize: 18,
        color: "white",
    },
    buttonBox: {
        width: "100%",
        height: 55,
        borderColor: "white",
        borderTopWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
    },
    buttonBoxBottom: {
        width: "100%",
        height: 55,
        borderColor: "white",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
    },
    logoutBox: {
        width: "100%",
        height: 55,
        borderColor: "white",
        borderTopWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
    },
});

export default Sidebar;
