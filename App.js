import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import FlowerScreen from "./screens/FlowerScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FlowerDetailScreen from "./screens/FlowerDetailScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const flowers = [
    {
      id: 1,
      name: "Rose",
      description: "A classic and timeless flower symbolizing love and beauty.",
      category: "Rose",
      image: require("./src/images/rose.webp"),
      price: 9.99,
    },
    {
      id: 2,
      name: "Phalaenopsis",
      description:
        "Bright and cheerful flowers that bring warmth and happiness.",
      category: "Carnation",
      image: require("./src/images/PhalaenopsisOrchidMagenta.jpeg"),
      price: 7.99,
    },
    {
      id: 3,
      name: "Singapore",
      description:
        "Elegant and graceful flowers available in a variety of colors.",
      category: "Chrysanthemum",
      image: require("./src/images/SingaporeOrchid.jpg"),
      price: 5.99,
    },
    {
      id: 4,
      name: "Exclusive Real",
      description:
        "Elegant and graceful flowers available in a variety of colors.",
      category: "Iris",
      image: require("./src/images/ExclusiveRealTouchOrchid.jpeg"),
      price: 13.99,
    },
    {
      id: 5,
      name: "Orchid Spray",
      description:
        "Elegant and graceful flowers available in a variety of colors.",
      category: "Chrysanthemum",
      image: require("./src/images/OrchidSpray.jpeg"),
      price: 19.99,
    },
    {
      id: 6,
      name: "Dancing Lady",
      description:
        "Elegant and graceful flowers available in a variety of colors.",
      category: "Carnation",
      image: require("./src/images/CymbidiumOrchid.jpeg"),
      price: 11.99,
    },
    {
      id: 7,
      name: "Luxe Phalaenopsis Orchid",
      description:
        "Elegant and graceful flowers available in a variety of colors.",
      category: "Iris",
      image: require("./src/images/LuxePhalaenopsisOrchid.jpeg"),
      price: 8.99,
    },
    {
      id: 8,
      name: "Cymbidium Orchid",
      description:
        "Elegant and graceful flowers available in a variety of colors.",
      category: "Rose",
      image: require("./src/images/CymbidiumOrchid.jpeg"),
      price: 17.99,
    },
    {
      id: 9,
      name: "Cymbidium Orchid Spray",
      description:
        "Elegant and graceful flowers available in a variety of colors.",
      category: "Catteleya",
      image: require("./src/images/CymbidiumOrchidSpray.jpeg"),
      price: 17.99,
    },
  ];
  const FlowerListScreen = () => <FlowerScreen flowers={flowers} />;
  const FavoriteListScreen = () => <FavoritesScreen />;
  const MainDrawer = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="FavoritesScreen" component={FavoriteListScreen} />
      </Drawer.Navigator>
    );
  };

  const MainTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Flower") {
              iconName = focused ? "flower" : "flower-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Flower" component={FlowerListScreen} />
        <Tab.Screen name="Favorites" component={FavoriteListScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={MainDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Tabs" component={MainTabs} />
        <Stack.Screen name="FlowerScreen" component={FlowerListScreen} />
        <Stack.Screen name="FlowerDetail" component={FlowerDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  pressed: {
    opacity: 0.25,
  },
});
