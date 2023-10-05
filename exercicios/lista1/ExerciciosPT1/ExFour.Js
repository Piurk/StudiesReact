import React from 'react';
import { View, Text, Image } from 'react-native';


var nome = "Rodrigo"

const bemvindo = (nome) => {
    return "Bem vindo " + nome;
}

function Ex4() {
return (
<View>
<Text> {bemvindo} </Text>
</View>
);
}
export default Ex4;