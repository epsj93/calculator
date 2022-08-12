import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from './src/components/Button';
import Display from './src/components/Display';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');

  function addDigit(n) {
    setDisplayValue({ displayValue: n });
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple />
        <Button label="/" operation />
        <Button label="7" onClick={addDigit} />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" operation />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" operation />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" operation />
        <Button label="0" double />
        <Button label="." />
        <Button label="=" operation />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
