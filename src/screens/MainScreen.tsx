// src/screens/MainScreen.tsx

import {Picker} from '@react-native-picker/picker';
import CleverTap from 'clevertap-react-native';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CleverTapService from '../services/CleverTapService';
import {addStuff, clearStuff, setSelectedFunction} from '../store/action';
import {AppDispatch, RootState} from '../store/store';

const MainScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState<string>('');
  const [identity, setIdentity] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [stuff, setStuff] = useState<string>('');
  const [selectedFunction, setSelectedFunctionState] = useState<string>('');

  const storedStuff = useSelector((state: RootState) => state.stuff);

  const handleAddStuff = () => {
    dispatch(addStuff(stuff));
    setStuff('');
  };

  const handleClearStuff = () => {
    dispatch(clearStuff());
  };

  const handleSelectFunction = (functionName: string) => {
    setSelectedFunctionState(functionName);
    dispatch(setSelectedFunction(functionName));
  };

  useEffect(() => {
    try {
      CleverTap.getCleverTapID((err, res) => {
        if (err) {
          console.error('Error getting CleverTap ID:', err);
        } else {
          console.log('CleverTapID:', res);
        }
      });
    } catch (error) {
      console.error('Unexpected error in useEffect:', error);
    }
  }, []);

  const handleContinue = () => {
    const props = {
      Name: name,
      Identity: identity,
      Email: email,
      Phone: phone,
      Stuff: storedStuff, // Use storedStuff from Redux
    };

    switch (selectedFunction) {
      case 'onUserLogin':
        CleverTapService.onUserLogin(props);
        break;
      case 'profileSet':
        CleverTapService.profileSet(props);
        break;
      case 'recordEvent':
        CleverTapService.recordEvent('Product Viewed', {
          Name: 'XYZ',
          Price: 123,
        });
        break;
      case 'toHandleNotification':
        CleverTapService.toHandleNotification();
        break;
      default:
        console.log('No function selected');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Identity"
        value={identity}
        onChangeText={setIdentity}
      />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} />
      <TextInput placeholder="Stuff" value={stuff} onChangeText={setStuff} />
      <Button title="Add" onPress={handleAddStuff} />
      <Button title="Clear" onPress={handleClearStuff} />
      <Picker
        selectedValue={selectedFunction}
        onValueChange={handleSelectFunction}>
        <Picker.Item label="onUserLogin" value="onUserLogin" />
        <Picker.Item label="profileSet" value="profileSet" />
        <Picker.Item label="recordEvent" value="recordEvent" />
        <Picker.Item
          label="toHandleNotification"
          value="toHandleNotification"
        />
      </Picker>
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default MainScreen;
