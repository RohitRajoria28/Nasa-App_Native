import React from 'react';
import { render, act } from '@testing-library/react-native';
import RandomAsteroid from './RandomAsteroid';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
describe('RandomAsteroid component', () => {
  it('should render the component', async () => {
    await act(async () => {
        render(<RandomAsteroid/>);
    });
  });

  it('should render the asteroid data after a random asteroid is generated', async () => {
    const { queryByText } =  render(<RandomAsteroid/>);
    await act(async () => {
      // Wait for the component to finish rendering and for the API request to complete
      await new Promise(resolve => setTimeout(resolve, 1000));
    });
    expect(queryByText('Your Random  Asteroid Data  🌠')).toBeNull();
    expect(queryByText('Name :')).toBeNull();
    expect(queryByText('nasa_jpl_url:')).toBeNull();
    expect(queryByText('is_potentially_hazardous_asteroid :')).toBeNull();
  });

  it('should render a random asteroid data after a random asteroid is generated', async () => {
    const { queryByText } = render(<RandomAsteroid/>);
    await act(async () => {
      // Wait for the component to finish rendering and for the API request to complete
      await new Promise(resolve => setTimeout(resolve, 1000));
    });
    expect(queryByText('Your Random  Asteroid Data  🌠')).toBeNull();
    expect(queryByText(/1\. Name : [a-zA-Z0-9]+/)).toBeNull();
    expect(queryByText('2. nasa_jpl_url:')).toBeNull();
    expect(queryByText('3. is_potentially_hazardous_asteroid :')).toBeNull();
  });
});
