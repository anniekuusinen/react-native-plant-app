import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const PlantCard = ({ plant, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
            <Image source={{ uri: plant.image }} style={styles.image} />
            <Text style={styles.name} numberOfLines={1}>{plant.name}</Text>
            <Text style={styles.date}>{plant.dateAdded}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "45%",
        height: 230,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#ECECEE",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    image: {
        width: "80%",
        height: "70%",
        borderRadius: 10,
        marginBottom: 8,
        resizeMode: "cover",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 5,
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
    },
    date: {
        fontSize: 12,
        color: "#666",
    },
});

export default PlantCard;
