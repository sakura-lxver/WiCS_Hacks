import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EmailSignScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}
export default EmailSignScreen;
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingVertical: 200,
    backgroundColor: '#BDFFB6'
  }
});