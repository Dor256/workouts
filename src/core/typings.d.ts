import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

export type BottomTabNavigationProps = {
  route: RouteProp<any,any>;
  navigation: BottomTabNavigationProp<any>;
};
