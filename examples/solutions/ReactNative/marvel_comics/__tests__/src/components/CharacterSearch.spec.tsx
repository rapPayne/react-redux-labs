import React from 'react';
import { CharacterSearch } from '../../../src/components/CharacterSearch';
import { render, fireEvent } from '@testing-library/react-native';

describe('CharacterSearch', () => {
  //let component;
  beforeEach(() => {
    //component = render(<CharacterSearch />);
  })

  it('lets the user enter a search string', () => {
    const someCharacterString = 'Spider'
    const { getByTestId } = render(<CharacterSearch onSearch={() => { }} />);
    const textBox = getByTestId("searchString");
    fireEvent.changeText(textBox, someCharacterString);
    expect(textBox.props.value).toEqual(someCharacterString);
  });

  it('searches when the button is pressed', () => {
    const searchString = "Hulk";
    // Mock the search function
    const searchFunc = jest.fn();
    //Put a searchString in the box.
    const { getByTestId, getByDisplayValue, getByLabelText, getByText } = render(<CharacterSearch onSearch={searchFunc} />);
    const textBox = getByTestId("searchString");
    fireEvent(textBox, "changeText", searchString)
    //Get the Button that says "Go" on it
    const goButton = getByText("Go");
    expect(goButton).toBeTruthy();
    //Hit the search <button>.
    fireEvent.press(goButton);
    //Make sure the mocked search function was called with the searchString
    //expect(searchFunc).toHaveBeenCalled();
    expect(searchFunc).toHaveBeenCalledWith(searchString)
  });

  it('shows a list of matching characters', () => {
    const searchString = "Hulk";
    const mockedSearchFunction = jest.fn(() => ([
      { name: "Testman", description: "Will render on the page" },
      { name: "Captain TDD", description: "Will render on the page" },
      { name: "The Spec Avenger", description: "Will render on the page" },
      { name: "Ms. Jest", description: "Will render on the page" },
    ]))
    const { getByTestId, getByText } = render(<CharacterSearch onSearch={mockedSearchFunction} />)
    const button = getByText("Go");
    fireEvent.press(button);

    throw ('not yet fully implemented');
  });

  // it('navigates to the character chosen', () => {
  //   throw('not yet implemented');
  // });

})