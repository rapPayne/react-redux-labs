import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Account } from '../components/Settings/Account'
import { AppPermissions } from '../components/Settings/AppPermissions'
import { PaymentSettings } from '../components/Settings/PaymentSettings'

export const Settings = () => {
  const nav = useNavigation();
  const Tabs = createBottomTabNavigator();
  return (
    <>
      <Text>
        Account settings</Text>
      <Text></Text>
      <Button title="Back" onPress={()=>nav.pop()} />
      <Tabs.Navigator>
        <Tabs.Screen name="Payments">
          {()=><PaymentSettings />}
        </Tabs.Screen>
        <Tabs.Screen name="Permissions">
          {()=><AppPermissions />}
        </Tabs.Screen>
        <Tabs.Screen name="Account">
          {()=><Account />}
        </Tabs.Screen>
      </Tabs.Navigator>
    </>
  );
}