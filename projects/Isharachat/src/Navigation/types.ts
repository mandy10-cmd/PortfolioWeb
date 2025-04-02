import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Camera: undefined;
  Message: undefined;
  Settings: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;