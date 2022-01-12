import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
// import { useQuery } from "@apollo/client";
import { useQuery } from "graphql-hooks";
import StoresQuery from "../GraphQL/StoresQuery";
import Store from "./Store";

const Stores = ({ history }) => {
    const { loading, data } = useQuery(StoresQuery);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    } else {
        if (data) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={data.Stores}
                        renderItem={({ item }) => (
                            <Store
                                title={item.store_name}
                                description={item.desc_snipet}
                                remaining={item.remaining_wares}
                                history={history}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal={false}
                        numColumns={2}
                    />
                </View>
            );
        } else {
            return null;
        }
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    scroll: {
        width: "100%",
    },
});

export default Stores;
