import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PlantList from '../screens/PlantList';
import AddPlant from '../screens/AddPlant';
import PlantDetails from '../screens/PlantDetails';

const StackNavigator = createStackNavigator();

const Stack = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="Plant List" component={PlantList} />
            <StackNavigator.Screen name="Add Plant" component={AddPlant} />
            <StackNavigator.Screen name="Plant Details" component={PlantDetails} />
        </StackNavigator.Navigator>
    );
};

export default Stack;
