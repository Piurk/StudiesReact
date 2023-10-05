import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

var nome 
var imagem // LOCAL

function Ex9() {
return (
<View>
<Text>{nome}</Text>
<Image source={imagem} height={1280} width={720}/>
</View>
);
}
export default Ex9;