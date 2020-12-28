import React, { FC, useState } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, Text, TextInput } from 'react-native';

interface Props {
  onSearch: Function,
}

export const CharacterSearch: FC<Props> = ({onSearch}) => {
  const [ searchString, setSearchString ] = useState("");
  function handlePress(e: NativeSyntheticEvent<NativeTouchEvent>): void {
    onSearch(searchString);
  }
  return (
    <>
      <TextInput value={searchString} onChangeText={setSearchString} testID="searchString" />
      <Button title="Go" onPress={handlePress}></Button>
    </>
  )
}