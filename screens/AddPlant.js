import React, { useState, useContext } from "react";
import { View, Text, TextInput, Image, StyleSheet, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PlantContext } from "../context/PlantContext";
import * as ImagePicker from "expo-image-picker";

const AddPlant = () => {
    const { addPlant } = useContext(PlantContext);
    const navigation = useNavigation();
    const [plantName, setPlantName] = useState("");
    const [notes, setNotes] = useState("");
    const [image, setImage] = useState(null);

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Permission denied", "Camera permission is required.");
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets.length > 0) {
            const imageUri = result.assets[0].uri;
            setImage(imageUri);
        } else {
            Alert.alert("Camera taking is cancelled");
        }
    };

    const handleSave = () => {
        if (!plantName.trim()) {
            Alert.alert("Please enter a plant name!");
            return;
        }

        const newPlant = {
            id: Date.now(),
            name: plantName,
            image: image || "https://fakeimg.pl/230x200?text=No+image+available&font_size=30",
            notes: notes,
            dateAdded: new Date().toLocaleDateString(),
        };

        addPlant(newPlant);
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.label}>Plant Name *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter plant name"
                    value={plantName}
                    onChangeText={setPlantName}
                />

                <Text style={styles.label}>Notes (Optional)</Text>
                <TextInput
                    style={[styles.input, styles.notesInput]}
                    placeholder="Provide a note"
                    value={notes}
                    onChangeText={setNotes}
                    multiline
                />

                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Text>No image selected</Text>
                )}

                <TouchableOpacity style={styles.photoButton} onPress={takePhoto}>
                    <Text style={styles.photoButtonText}>📷 Take Photo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save Plant</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AddPlant;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    notesInput: {
        height: 80,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    photoButton: {
        backgroundColor: "#4A8453",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 8,
    },
    photoButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
    },
    saveButton: {
        backgroundColor: "#22422B",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    saveButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});
