import React, { FunctionComponent, useState } from 'react';
import { Text } from 'react-native';
import { Button } from '../../../../core/components/button';
import { Input } from '../../../../core/components/input';
import { useAuth } from '../../../../core/hooks/useAuth';
import { styles } from '../../styles';

export const Login: FunctionComponent = () => {
  const auth = useAuth();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function onEmailChange(emailText: string) {
    setEmail(emailText);
  }

  function onPasswordChange(passwordText: string) {
    setPassword(passwordText);
  }

  function onSubmit() {
    if (email && password) {
      auth.login({ email, password });
    }
  }

  return (
    <>
      <Input
        testID="login-email-input"
        placeholder="Enter email..."
        onChangeText={onEmailChange}
        value={email}
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        testID="login-password-input"
        placeholder="Enter password..."
        onChangeText={onPasswordChange}
        value={password}
        textContentType="password"
        secureTextEntry
        passwordRules="minlength: 6"
        autoCapitalize="none"
        onSubmitEditing={onSubmit}
      />
      <Button testID="login-button" onPress={onSubmit}>
        <Text style={styles.buttonText}>Log In</Text>
      </Button>
    </>
  );
};
