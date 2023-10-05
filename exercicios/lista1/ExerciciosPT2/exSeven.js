import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

var nome

function Ex7() {
return (
<View>
<TextInput onChangeText={nome}/>
<Button onPress={Console.Log(nome)} />
</View>
);
}
export default Ex7;