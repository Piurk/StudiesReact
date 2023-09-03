import React from 'react';
import { View, Text, Image } from 'react-native';

var Tabuada
var  x = 1
var soma


while (x<10) {
Tabuada = 4*x
soma = soma + Tabuada + "\n"
}

function Ex1() {
return (
<View>

<Text>Tabuada do 4: \n {Tabuada}</Text>
</View>
);
}
export default Ex1;