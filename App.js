import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StoreDetailed from "./components/StoreDetailed";
import Home from "./components/Home";
import Stores from "./components/Stores";
import { UserContext } from "./components/UserContex"
import { GraphQLClient, ClientContext } from "graphql-hooks";

const client = new GraphQLClient({
    url: "http://192.168.0.151:4000/graphql", // .env
});

// TODO:
// Gestures react-native-swipe-gestures > react-native-gesture-handler

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [homePage, setHomePage] = useState(true);

    return(
        <ClientContext.Provider value={client}>
            <NativeRouter>
                <UserContext.Provider value={{ setHomePage, sidebarOpen, setSidebarOpen }}>
                    <View style={styles.container}>
                        {!homePage &&
                            <Header toggleSidebar={setSidebarOpen} />
                        }
                        <Switch style={styles.container}>
                            {/* <Route path="/" component={Stores} /> */}
                            <Route exact path="/" component={Home} />
                            <Route path="/Detailes" component={StoreDetailed} />
                            <Route exact path="/Stores" component={Stores} />
                        </Switch>
                        <Route path="/" component={Sidebar} />
                    </View>
                </UserContext.Provider>
            </NativeRouter>
        </ClientContext.Provider>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
