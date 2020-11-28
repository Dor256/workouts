import React, { FunctionComponent } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../../styles';
import { WorkoutItem } from '../../components/workout-item';
import { IWorkout } from '../../../../core/api';
import { FloatingActionButton } from '../../components/fab';
import { createStackNavigator, StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack';
import { Route, useNavigation } from '@react-navigation/native';
import { Workout } from '../../../workout';
import { Colors } from '../../../../core/constants';
import { Loader } from '../../../../core/components/loader';

export type StackParams = {
  List: undefined;
  Workout: { name: string };
  AddWorkout: undefined;
}

export type StackRoutes<T extends keyof StackParams> = Route<T, StackParams[T]>

const { Navigator, Screen } = createStackNavigator<StackParams>();

function screenOptions({ route }: { route: StackRoutes<keyof StackParams> }): StackNavigationOptions {
  const defaultOptions: StackNavigationOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: Colors.BLUE }
  };

  switch (route.name) {
    case 'List':
      return {
        ...defaultOptions,
        headerTitle: 'Workouts'
      };
    case 'AddWorkout':
      return {
        ...defaultOptions,
        headerTitle: 'Add Workout'
      };
    case 'Workout':
      return {
        ...defaultOptions,
        headerTitle: route.params?.name
      };
    default:
      return defaultOptions;
  }
}

export type WorkoutListProps = {
  workouts: IWorkout[];
};

function keyExtractor(_: IWorkout, index: number) {
  return `${index}`;
}

export const WorkoutList: FunctionComponent<WorkoutListProps> = (props) => {
  const navigation = useNavigation<StackNavigationProp<StackParams>>();

  function onFABPress() {
    navigation.push('AddWorkout');
  }

  function renderItem({ item }: { item: IWorkout }) {
    return <WorkoutItem onPress={() => navigation.push('Workout', { name: item.name })} name={item.name} />;
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="List">
        {() => {
          return (
            <View testID="workout-list" style={styles.container}>
              {
                props.workouts.length ?
                <FlatList
                  extraData={props.workouts}
                  data={props.workouts}
                  renderItem={renderItem}
                  keyExtractor={keyExtractor}
                /> :
                <Loader style={styles.loader} />
              }
              <FloatingActionButton onPress={onFABPress} />
            </View>
          );
        }}
      </Screen>
      <Screen name="Workout" component={Workout} />
    </Navigator>
  );
};
