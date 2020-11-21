import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen8177213Navigator from '../features/BlankScreen8177213/navigator';
import EmailAuth5166176Navigator from '../features/EmailAuth5166176/navigator';
import Feed6166175Navigator from '../features/Feed6166175/navigator';
import UserProfile7166174Navigator from '../features/UserProfile7166174/navigator';
import SignUp29166172Navigator from '../features/SignUp29166172/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen8177213: { screen: BlankScreen8177213Navigator },
EmailAuth5166176: { screen: EmailAuth5166176Navigator },
Feed6166175: { screen: Feed6166175Navigator },
UserProfile7166174: { screen: UserProfile7166174Navigator },
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
