import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import BottomTabs from './navigation/bottomtabs'
import { PlantProvider } from './context/PlantContext';

const App = () => {
  return (
    <PlantProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </PlantProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
