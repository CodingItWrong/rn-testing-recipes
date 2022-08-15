import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {Alert} from 'react-native';
import NativeComponentsScreen from './NativeComponentsScreen';

describe('NativeComponentsScreen', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('can test that an alert was shown', () => {
    jest.spyOn(Alert, 'alert');
    // TODO: clear mocks afterward?

    render(<NativeComponentsScreen />);

    fireEvent.press(screen.getByText('Show Alert Message'));

    expect(Alert.alert).toHaveBeenCalledWith(
      'Alert Title',
      'This is an alert',
      [{text: 'OK'}],
    );
  });

  it('can trigger button actions', () => {
    jest.spyOn(Alert, 'alert');

    render(<NativeComponentsScreen />);

    fireEvent.press(screen.getByText('Show Confirmation'));
    const alertButtons = Alert.alert.mock.calls[0][2];

    act(() => {
      alertButtons.find(button => button.text === 'No').onPress();
    });

    expect(screen.queryByText('tapped No')).toBeTruthy();

    act(() => {
      alertButtons.find(button => button.text === 'Yes').onPress();
    });

    expect(screen.queryByText('tapped Yes')).toBeTruthy();
  });
});
