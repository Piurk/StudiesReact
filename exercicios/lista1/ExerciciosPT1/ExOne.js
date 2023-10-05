import React from 'react';
import { View, Text, Image } from 'react-native';

var Tabuada
var  x = 1
var soma = "Tabuada do 4: \n"


while (x<=10) {
Tabuada = 4*x
soma = soma+ "4 * "+ x + " = " + Tabuada + "\n" 
x++
}

function Ex1() {
return (
<View>

<Text>{soma}</Text>
</View>
);
}
export default Ex1;