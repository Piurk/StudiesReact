import React from 'react';
import { View, Text } from 'react-native';

function Bemvindo(props) {
  return (
    <View>
      <Text>Bem-vindo, {props.name}!</Text>
    </View>
  );
}

function Ex10() {
  return (
    <View>
      <Bemvindo name="Nome1" />
      <Bemvindo name="Nome2" />
      <Bemvindo name="Nome3" />
      <Bemvindo name="Nome4" />
      <Bemvindo name="Nome5" />
    </View>
  );
}

export default Ex10;