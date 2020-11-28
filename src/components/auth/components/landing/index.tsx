import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { Button } from '../../../../core/components/button';
import { styles } from '../../styles';
import type { RouteParams } from '../..';
import type { StackNavigationProp } from '@react-navigation/stack';

export const Landing: FunctionComponent = () => {
  const navigation = useNavigation<StackNavigationProp<RouteParams>>();

  return (
    <>
      <Button testID="landing-login-button" onPress={() => navigation.push('Login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </Button>
      <Button testID="landing-signup-button" onPress={() => console.log('SIGNUP')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Button>
    </>
  );
};
