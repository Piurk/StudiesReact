import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

var numero = 0

function Ex8() {
return (
<View>
<Button
title = "Somar"
onPress={numero++}/>
<Button 
title="Ver"
onPress={() => Alert.alert(numero)} />
</View>
);
}
export default Ex8;