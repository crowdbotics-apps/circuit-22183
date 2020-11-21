import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen8177213Navigator from '../features/BlankScreen8177213/navigator';
import CalendarView3166179Navigator from '../features/CalendarView3166179/navigator';
import Dashboard23166178Navigator from '../features/Dashboard23166178/navigator';
import Maps4166177Navigator from '../features/Maps4166177/navigator';
import EmailAuth5166176Navigator from '../features/EmailAuth5166176/navigator';
import Feed6166175Navigator from '../features/Feed6166175/navigator';
import UserProfile7166174Navigator from '../features/UserProfile7166174/navigator';
import NotificationList8166173Navigator from '../features/NotificationList8166173/navigator';
import SignUp29166172Navigator from '../features/SignUp29166172/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen8177213: { screen: BlankScreen8177213Navigator },
CalendarView3166179: { screen: CalendarView3166179Navigator },
Dashboard23166178: { screen: Dashboard23166178Navigator },
Maps4166177: { screen: Maps4166177Navigator },
EmailAuth5166176: { screen: EmailAuth5166176Navigator },
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
