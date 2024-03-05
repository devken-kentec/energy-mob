import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import  Home  from '../pages/Home';
import Exercicios from '../pages/Exercicios' 

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
 return (
    <AppDrawer.Navigator>
        <AppDrawer.Screen
            name="Home"
            component={Home}
        />
        <AppDrawer.Screen
            name="Exercicios"
            component={Exercicios}
        />
    </AppDrawer.Navigator>
  );
}