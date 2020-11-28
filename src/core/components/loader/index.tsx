import React, { FunctionComponent, useEffect, useRef } from 'react';
import { Animated, Easing, ViewStyle } from 'react-native';
import { styles } from './styles';

export type LoaderProps = {
  style?: ViewStyle
}

const OUTER_PULSE_DURATION = 700;
const INNER_PULSE_DURATION = 1500;

export const Loader: FunctionComponent<LoaderProps> = ({ style }) => {
  const outerRadius = useRef(new Animated.Value(1));
  const innerRadius = useRef(new Animated.Value(0.9));
  const innerOpacity = useRef(new Animated.Value(1));

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(outerRadius.current, {
            toValue: 0.5,
            duration: OUTER_PULSE_DURATION,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.quad)
          }),
          Animated.timing(outerRadius.current, {
            toValue: 1,
            duration: OUTER_PULSE_DURATION,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.quad)
          })
        ]),
        Animated.parallel([
          Animated.sequence([
            Animated.timing(innerRadius.current, {
              toValue: 1.7,
              duration: INNER_PULSE_DURATION,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.quad)
            }),
            Animated.timing(innerRadius.current, {
              toValue: 0.9,
              duration: 0,
              useNativeDriver: true
            })
          ]),
          Animated.sequence([
            Animated.timing(innerOpacity.current, {
              toValue: 0,
              duration: INNER_PULSE_DURATION,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.quad)
            }),
            Animated.timing(innerOpacity.current, {
              toValue: 1,
              duration: 0,
              useNativeDriver: true
            })
          ])
        ])
      ])
    ).start();
  }, []);

  return (
    <>
      <Animated.View style={[styles.innerPulse, { transform: [{ scale: innerRadius.current }], opacity: innerOpacity.current }, style]} />
      <Animated.View style={[styles.outerPulse, { transform: [{ scale: outerRadius.current }] }]} />
    </>
  );
};

