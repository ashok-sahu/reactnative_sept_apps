import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  Home,
  Details,
} from "../../../App/Decode_apps/Travel_UI/screens/index";

const stackNavigationOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Details },
  },
  {
    defaultNavigationOptions: stackNavigationOptions,
  }
);

export default createAppContainer(AppNavigator);
