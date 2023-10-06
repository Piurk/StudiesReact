import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function RenderizacaoCondicional(props) {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <View>
      <Button title={mostrarTexto ? "Ocultar" : "Mostrar"} onPress={toggleTexto} />
      {mostrarTexto && <Text>{props.texto}</Text>}
    </View>
  );
}

function Ex11() {
  return (
    <View>
      <RenderizacaoCondicional texto="Texto a ser exibido quando o botão for pressionado." />
    </View>
  );
}

export default Ex11;