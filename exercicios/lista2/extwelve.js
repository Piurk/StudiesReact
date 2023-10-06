import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function ContadorComEstado(props) {
  const [contador, setContador] = useState(0);

  const Adicionar = () => {
    setContador(contador + props.valorIncremento);
  };

  const Subtrair = () => {
    setContador(contador - props.valorIncremento);
  };

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Adicionar" onPress={Adicionar} />
      <Button title="Subtrair" onPress={Subtrair} />
    </View>
  );
}

function Ex12() {
  return (
    <View>
      <ContadorComEstado valorIncremento={2} />
      <ContadorComEstado valorIncremento={5} />
    </View>
  );
}

export default Ex12;