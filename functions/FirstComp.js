import React from 'react';
import { View, Text, Image } from 'react-native';
function MeuComponente() {
return (
<View>
<Image
source = { require("./icons/diceroll.png")}/>
<Text>Dicerolls</Text>
</View>
);
}
export default MeuComponente;