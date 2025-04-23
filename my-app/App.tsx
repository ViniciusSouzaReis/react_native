import { type ReactElement, useState } from 'react';

import { Text, View, Button } from 'react-native';

export default function App(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
      <Text>{'Hello World !!!!'}</Text>
      <Text>{count}</Text>
      <Button
        title="Press me"
        style={{ marginTop: 20 }}
        color="#841584"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}


