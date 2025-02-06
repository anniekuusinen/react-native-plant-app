# React Native Plant Mobile Application

## Overview
This is a cross-platform mobile application built with React Native. It allows users to add new plants using phone's camera and check details of their added plants. 

## Feature
- Take a photo of your plants using the camera.
- Add a name and optional note for each plant.
- View a detailed page for each plant with its image, name, note, and the date it was added.
- Browse through a list of all plants in a grid view with basic information.
- Navigate through the app with bottom navigation tabs for easy access to the plant list and adding new plants.

## App Structure
- /components: Reusable components for the app like PlantCard, PlantDetails.
- /context: Context provider and consumer for managing plant data across the app.
- /screens: All the screens in the app such as PlantList, AddPlant, PlantDetails.
- /assets: Contains assets like images and icons used in the app.
- /navigation: Manages the app's navigation structure with React Navigation.

## Screens
- PlantList.js: Displays the list of plants in a grid view. If there are no plants, a message prompts the user to add a new plant.
- AddPlant.js: Allows the user to take a photo, name their plant, and optionally add a note. The plant is then added to the list.
- PlantDetails.js: Displays the details of a selected plant including its image, name, note (if any), and the date it was added.
- SettingsScreen.js (empty): A simple navigable view with placeholder content.
- ProfileScreen.js (empty): A simple navigable view with placeholder content.

## Technologies Used
- React Native: Framework for building the mobile application.
- Expo: Development environment for React Native.
- React Navigation: For managing navigation between screens.
- Context API: To manage and share plant data across screens.
- Ionicons: For icons used in buttons and tabs.

## Installation
1. Clone the repository: `git clone https://github.com/yourusername/plant-photo-app.git`
2. Install dependencies: `cd plant-photo-app && npm install`

## How to Run
1. Start the development: `npm start`
2. Run on physical devices:
   - For Android: Scan the QR code with the Expo Go app (available in the Google Play Store).
   - For iOS: Scan the QR code with the Expo Go app (available in the App Store).
   - Alternatively, you can press "Run on Android/iOS simulator" in the Expo developer tools to open the app on an emulator.
3. Use the app: once the app is run on devices or simulator, you can browse the plant list, navigate between screens, and start adding plants.

## Screenshots
### List view
<img src="https://github.com/anniekuusinen/react-native-plant-app/blob/main/assets/IMG_3249.PNG" width="200" style="display:inline-block; margin-right:10px;"><img src="https://github.com/anniekuusinen/react-native-plant-app/blob/main/assets/IMG_3251.PNG" width="200" style="display:inline-block; margin-right:10px;">

### Add Plant View
<img src="https://github.com/anniekuusinen/react-native-plant-app/blob/main/assets/IMG_3253.PNG" width="200" height="400"><img src="https://github.com/anniekuusinen/react-native-plant-app/blob/main/assets/IMG_3254.PNG" width="200" height="400">

### Bottom Navigation
<img src="https://github.com/anniekuusinen/react-native-plant-app/blob/main/assets/IMG_3255.jpg" width="200" height="50">

### Details View
<img src="https://github.com/anniekuusinen/react-native-plant-app/blob/main/assets/IMG_3252.PNG" width="200" height="400">


