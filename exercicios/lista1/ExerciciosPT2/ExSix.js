import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

var Tabuada
var  x = 1
var soma = "Tabuada do " +y+"\n"
var y = 1

while (y<=9){
while (x<=10) {
Tabuada = y*x
soma = soma+" "+ y+" * "+ x + " = " + Tabuada + "\n" 
x++
} 
x=1
y++
}
function Ex6() {
return (
<ScrollView>
<Image source={require("C:/Users/Roberto/Documents/APPS Cell/teste/StudiesReact/icons/Calculator.jpg")}/>
<Text>Tabuadas</Text>
<Text>{soma}</Text>
</ScrollView>
);
}
export default Ex6;