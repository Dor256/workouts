import React, { FunctionComponent } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from '../../styles';
import { WorkoutItem } from '../../components/workout-item';
import { IWorkout } from '../../../../core/api';
import { FloatingActionButton } from '../../components/fab';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Route, useNavigation, useRoute } from '@react-navigation/native';

export type StackParams = {
  List: {};
  Workout: { name: string };
  AddWorkout: undefined;
}

export type StackRoutes<T extends keyof StackParams> = Route<T, StackParams[T]>

const { Navigator, Screen } = createStackNavigator<StackParams>();

function Stam() {
  const route = useRoute<StackRoutes<'Workout'>>();
  return <Text>{route.params.name}</Text>;
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
    <Navigator>
      <Screen name="List">
        {() => {
          return (
            <View style={styles.container}>
              <Text style={styles.heading}>Workouts</Text>
              <FlatList
                extraData={props.workouts}
                data={props.workouts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
              <FloatingActionButton onPress={onFABPress} />
            </View>
          );
        }}
      </Screen>
      <Screen name="Workout" component={Stam} />
    </Navigator>
  );
};