import {render, screen} from '@testing-library/react-native';
import QueriesScreen from './QueriesScreen';

describe('QueriesScreen', () => {
  it('can get by text', () => {
    render(<QueriesScreen />);

    expect(screen.queryByText('Hello, React Native!')).toBeTruthy();
    expect(screen.queryByText('This text should not be present')).toBeNull();

    expect(screen.queryByPlaceholderText('Text goes here')).toBeTruthy();
  });
});
