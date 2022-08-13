import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from './src/components/Button';
import Display from './src/components/Display';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const addDigit = (n) => {
    if (n === '.' && displayValue.includes('.')) {
      return;
    }
    displayValue === '0' || clearDisplay
      ? setDisplayValue('')
      : setDisplayValue(displayValue);
    setDisplayValue(displayValue + n);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      setValues[current](newValue);
      setDisplayValue({ values });
    }
  };
  const clearMemory = () => {
    setDisplayValue('0');
  };
  /* const setOperation = () => {}; */

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
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
