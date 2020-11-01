import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed6166175Navigator from '../features/Feed6166175/navigator';
import UserProfile7166174Navigator from '../features/UserProfile7166174/navigator';
import NotificationList8166173Navigator from '../features/NotificationList8166173/navigator';
import SignUp29166172Navigator from '../features/SignUp29166172/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed6166175: { screen: Feed6166175Navigator },
UserProfile7166174: { screen: UserProfile7166174Navigator },
NotificationList8166173: { screen: NotificationList8166173Navigator },
SignUp29166172: { screen: SignUp29166172Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
