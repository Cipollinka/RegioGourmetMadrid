import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserProvider} from './src/user/Provider/UserProvider.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {LoaderOne} from './src/pages/Loader/screen-one.tsx';
import {LoaderTwo} from './src/pages/Loader/screen-two.tsx';
import {LoaderThree} from './src/pages/Loader/screen-three.tsx';
import {Main} from './src/pages';
import {OnboardingScreen} from './src/pages/OnBoards/on-boards.tsx';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animationEnabled: false}}>
          <Stack.Screen name="LoaderOne" component={LoaderOne} />
          <Stack.Screen name="LoaderTwo" component={LoaderTwo} />
          <Stack.Screen name="LoaderThree" component={LoaderThree} />
          <Stack.Screen name="OnBoards" component={OnboardingScreen} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
