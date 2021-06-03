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
  const resetDefault = () => {
    setRandomColor('rgb(32, 0, 126)');
  };
  return (
    <>
      <View style={[styles.viewStyle, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBgColor}>
          <Text style={styles.textStyle}>BG CHANGER</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetDefault}>
          <Text style={styles.resetStyle}>RESET</Text>
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
    backgroundColor: '#B4161B',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  resetStyle: {
    color: '#fff',
    fontSize: 25,
    backgroundColor: '#23C4ED',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 10,
    borderRadius: 15,
  },
});
