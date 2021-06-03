import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBgColor = () => {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);
    console.log(`generated COLOR: rgb(${first},${second},${third})`);
    setRandomColor(`rgb(${first},${second},${third})`);
  };
  return (
    <>
      <View style={[styles.viewStyle, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBgColor}>
          <Text style={styles.textStyle}>Hello World</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: '#bb2c39',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
});
