import React from 'react';
import { StyleSheet, View } from 'react-native-dom'
import '../css/c-loader.css';

function Loading() {
  return ( 
    <View style={ styles.cLoader }>
      <div className="animation" />
    </View>
  )
}

const styles = StyleSheet.create({
  cLoader: {
    width: '100vw',
    height: '100vh',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Loading;

// .c-loader .animation {
//   animation: is-rotating 1s infinite;
//   border: 6px solid #e5e5e5;
//   border-radius: 50%;
//   border-top-color: #7510f7;
//   width: 50px;
//   height: 50px;
// }

// @keyframes is-rotating {
//   to {
//     transform: rotate(1turn);
//   }
// }