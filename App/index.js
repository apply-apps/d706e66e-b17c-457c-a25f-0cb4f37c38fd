// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const tales = [
    { id: '1', title: 'The Little Red Riding Hood', tale: 'Once upon a time...', imageUrl: 'https://picsum.photos/300/200' },
    { id: '2', title: 'Cinderella', tale: 'Once upon a time...', imageUrl: 'https://picsum.photos/300/200' },
];

function HomeScreen({ navigation }) {
    return (
        <View style={HomeScreenStyles.container}>
            <Text style={HomeScreenStyles.title}>Kids Tales</Text>
            {tales.map(tale => (
                <TouchableOpacity
                    key={tale.id}
                    style={HomeScreenStyles.button}
                    onPress={() => navigation.navigate('Tale', { tale })}
                >
                    <Text style={HomeScreenStyles.buttonText}>{tale.title}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

function TaleScreen({ route }) {
    const { tale } = route.params;

    return (
        <SafeAreaView style={TaleScreenStyles.container}>
            <Text style={TaleScreenStyles.title}>{tale.title}</Text>
            <Image source={{ uri: tale.imageUrl }} style={TaleScreenStyles.image} />
            <Text style={TaleScreenStyles.taleText}>{tale.tale}</Text>
        </SafeAreaView>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale" component={TaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
});

const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
    },
});

const TaleScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    taleText: {
        fontSize: 18,
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
});