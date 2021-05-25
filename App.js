// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantShowScreen from "./src/screens/RestaurantShowScreen";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Search'}>
                <Stack.Screen name="Search"
                              component={SearchScreen}
                              options={{
                                  title: 'Business Search',
                                  headerTitleAlign: 'center'
                              }}/>
                <Stack.Screen name="RestaurantShow"
                              component={RestaurantShowScreen}
                              options={{
                                  title: 'Restaurant Details',
                                  headerTitleAlign: 'center'
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
