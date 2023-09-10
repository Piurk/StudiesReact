import React from 'react';
import { View, Text, Image } from 'react-native';


var nome = "Rodrigo"
var lenght = nome.length


function Ex3() {
return (
<View>
<Text> Olá {nome},  seu nome tem {lenght} letras!!</Text>
</View>
);
}
export default Ex3;