import { type ReactElement, useState, Component } from 'react';

import { Text, View, Button, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.adicionar = this.adicionar.bind(this);
  }

  adicionar() {
    this.setState({ count: this.state.count + 1 });
  }

  render(): ReactElement {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
        <Jobs height={300} width={300}/>
        <Text>Hello World !!!!</Text>
        <Text style={{ color: '#ff0000', fontSize: 25}}>{this.state.count}</Text>
        <Button
          title="Press me"
          style={{ marginTop: 20 }}
          color="#841584"
          onPress={this.adicionar}
        />
      </View>
    );
  }
 
}

function Jobs({ height, width}): ReactElement {
  return (
    <Image 
      source={{ uri: 'https://sujeitoprogramador.com/steve.png' }}
      style={{ width, height, borderRadius: 100 }}
    />
  );
}


