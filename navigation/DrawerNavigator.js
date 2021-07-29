import * as React from 'react';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer=createDrawerNavigator()

const DrawerNavigator=()=>{
return(
<DrawerNavigator>
<Drawer.Screen name="Home" component={TabNavigator} />
<Drawer.Screen name="Profile" component={Profile} />
</DrawerNavigator>

)
}
export default DrawerNavigator 