import React from 'react';
import { View, Text, Image } from 'react-native';

var x =25
var soma = "Números Divisiveis por três entre 25 e 70: \n \n"


while (x<=70) {
if (x % 3 == 0){
    soma = soma + x + "\n" 
} 
x++
}

function Ex2() {
return (
<View>

<Text>{soma}</Text>
</View>
);
}
export default Ex2;