import React from 'react';
import { Text } from 'react-native';
import { theme } from './theme';

export const Title = ({children}) => {
  return (
    <Text style={{...theme.text.headline, fontFamily:undefined}}>{children}</Text>
  )
}