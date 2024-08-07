
import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

const App = () => {
  // State to hold the values of the input fields
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  // Function to handle button press
  const handlePress = () => {
    // Convert input values to numbers and calculate the total
    const num1 = parseFloat(input1) || 0;
    const num2 = parseFloat(input2) || 0;
    const total = num1 + num2;
    // console.warn(total);
    // alert(total);
    // Update input3 with the total value
    setInput3(total.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my first Application</Text>
      <Text style={styles.label}>Enter first value to add</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first value"
        keyboardType="numeric"
        value={input1}
        onChangeText={setInput1}
      />
      <Text style={styles.label}>Enter second value to add</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter second value"
        keyboardType="numeric"
        value={input2}
        onChangeText={setInput2}
      />
      <Text style={styles.text}>Total</Text>
      <TextInput
        style={styles.input}
        placeholder="Total will be displayed here"
        value={input3}
        editable={false} // Prevent user from editing this field
      />
      <Button title="Calculate Total" onPress={handlePress} />
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    // backgroundColor:'gray',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  text: {
    // color:'white',
    fontSize: 30,
    marginBottom: 10,
  },
  label: {
    // color:'white',
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    height: 40,
    color: 'red',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default App;