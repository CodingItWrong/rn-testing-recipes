import {render, screen} from '@testing-library/react-native';
import QueriesScreen from './QueriesScreen';

describe('QueriesScreen', () => {
  it('can get by text', () => {
    render(<QueriesScreen />);

    expect(screen.queryByText('Hello, React Native!')).toBeTruthy();
    expect(screen.queryByText('This text should not be present')).toBeNull();

    expect(screen.queryByPlaceholderText('Text goes here')).toBeTruthy();
  });

  it('can get input text', () => {
    render(<QueriesScreen />);

    expect(screen.queryByPlaceholderText('Text goes here').props.value).toEqual(
      'initial input',
    );
    expect(screen.queryByPlaceholderText('Text goes here')).toHaveProp(
      'value',
      'initial input',
    );
  });

  it('can get an Image', () => {
    render(<QueriesScreen />);

    expect(screen.queryByLabelText('Harold')).toBeTruthy();
  });

  it('can get an SVG', () => {
    render(<QueriesScreen />);

    expect(screen.queryByLabelText('down arrow')).toBeTruthy();
  });
});
