import React from 'react';
import { Text, View } from 'react-native';
import { store } from '../state/store';
import { CharacterSearch } from '../components/CharacterSearch';

interface Props {
  name?: string;
  enthusiasmLevel?: number;
}

export const Landing: React.FC<Props> = (props:Props) => {
  return (
    <View>
      <CharacterSearch onSearch={doCharacterSearch} />
    </View>
  )
}

function doCharacterSearch(searchString: string) {
  throw "Not yet implemented"
}