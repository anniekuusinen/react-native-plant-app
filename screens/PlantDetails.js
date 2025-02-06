import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PlantDetails = ({ route }) => {
    const { plant } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: plant.image }} style={styles.image} />
            <Text style={styles.name}>{plant.name}</Text>
            <Text style={styles.note}>{plant.notes ? plant.notes : "No notes added"}</Text>
            <Text style={styles.dateAdded}>{`Added on: ${plant.dateAdded}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    note: {
        fontSize: 16,
        color: "#555",
        marginBottom: 10,
    },
    dateAdded: {
        fontSize: 14,
        color: "#888",
    },
});

export default PlantDetails;
