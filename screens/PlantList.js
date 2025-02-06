import React, { useContext } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { PlantContext } from "../context/PlantContext";
import PlantCard from "../components/PlantCard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlantList = () => {
    const { plants } = useContext(PlantContext);
    const navigation = useNavigation();

    const navigateToDetails = (plant) => {
        navigation.navigate("Plant Details", { plant });
    };

    return (
        <View style={styles.container}>
            {plants.length === 0 ? (
                <View style={styles.noPlantsContainer}>
                    <Text style={styles.noPlantsText}>Your plant list is empty. Start by adding a new plant!</Text>
                </View>
            ) : (
                <FlatList
                    data={plants}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => <PlantCard plant={item} onPress={() => navigateToDetails(item)} />}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.list}
                />
            )}
            <TouchableOpacity
                style={styles.scanButton}
                onPress={() => navigation.navigate("Add Plant")}
            >
                <Ionicons name="camera" size={30} color="white" />
                <Text style={styles.scanText}>Add New Plant</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        paddingHorizontal: 10,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    list: {
        paddingVertical: 10,
    },
    noPlantsContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F0F7F2",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        marginTop: 50,
        margin: "auto",
        paddingVertical: 30,
        width: '80%',
    },
    noPlantsText: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        color: "#555",
        marginBottom: 20,
        lineHeight: 28,
    },
    row: {
        flex: 1,
        justifyContent: "space-between",
    },
    scanButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#4A8453",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    scanText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },
});

export default PlantList;
