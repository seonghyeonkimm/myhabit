import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function HomeScreen({ navigation }) {
  const [count ,setCount] = useState(0);

  return (
    <Container>
      <WebView source={{ uri: 'https://www.tpay.co.kr' }} />
    </Container>
  );
}