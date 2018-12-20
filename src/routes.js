import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Welcome from '~/pages/Welcome';

const Routes = () => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      User: createBottomTabNavigator(),
    },
    {},
  ),
);

export default Routes;
