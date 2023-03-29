import React from 'react';
import { fireEvent, render,act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
const Stack = createNativeStackNavigator();

test('initial state of id is undefined', () => {
    const { getByTestId } = render(<NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}

        />
        </Stack.Navigator>
      </NavigationContainer>);
    const inputValue = getByTestId('input-value').props.value;
    expect(inputValue).toBe('');
});



describe("Home component", () => {
    it("should render without errors", () => {
        render(<NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
    
            />
            </Stack.Navigator>
          </NavigationContainer>);
    });
  
    describe('Home Component', () => {
        test('should render correctly', () => {
          const { getByTestId } = render(<NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
    
            />
            </Stack.Navigator>
          </NavigationContainer>);
          const input = getByTestId('input-value');
          const submitButton = getByText('Submit');
          const randomButton = getByText('Generate Random Asteroid');
          expect(input).toBeDefined();
          expect(submitButton).toBeDefined();
          expect(randomButton).toBeDefined();
        });
      
        test('should update the id state on input change', () => {
          const { getByTestId } =render(<NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
    
            />
            </Stack.Navigator>
          </NavigationContainer>);
          const input = getByTestId('input-value');
          fireEvent.changeText(input, '123');
          expect(input.props.value).toBe('123');
        });
      
        test('should call handleClick on submit button press', () => {
          const { getByTestId, getByText } =render(<NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
    
            />
            </Stack.Navigator>
          </NavigationContainer>);
          const input = getByTestId('input-value');
          const submitButton = getByText('Submit');
          const handleClick = jest.fn();
          fireEvent.changeText(input, '123');
          fireEvent.press(submitButton);
          expect(handleClick).toHaveBeenCalledTimes(1);
        });
      
        test('should call handleRandom on random button press', () => {
          const { getByText } =render(<NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
    
            />
            </Stack.Navigator>
          </NavigationContainer>);
          const randomButton = getByText('Generate Random Asteroid');
          const handleRandom = jest.fn();
          fireEvent.press(randomButton);
          expect(handleRandom).toHaveBeenCalledTimes(1);
        });
      
        test('should call fetchData on finalID change', async () => {
          const { getByTestId } =render(<NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
    
            />
            </Stack.Navigator>
          </NavigationContainer>);
          const input = getByTestId('input-value');
          fireEvent.changeText(input, '2465633');
          await act(async () => {
            const fetchData = jest.fn();
            await fetchData();
            expect(fetchData).toHaveBeenCalledTimes(1);
          });
        });
      });
  });
 