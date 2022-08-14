import {fireEvent, render, screen} from '@testing-library/react-native';
import {Alert} from 'react-native';
import NativeComponentsScreen from './NativeComponentsScreen';

describe('NativeComponentsScreen', () => {
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
});
