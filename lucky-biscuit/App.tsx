import { type ReactElement, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function App():ReactElement {
  const [frase, setFrase] = useState<string>('Quebre o biscoito e veja a sorte!');
  const [img, setImg] = useState<string>(require('./src/biscoito.png'));

  const frasesArray = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
  ];

  const quebraBiscoito = (): void => {
    const randomIndex = Math.floor(Math.random() * frasesArray.length);
    setFrase(`"${frasesArray[randomIndex]}"`);
    setImg(require('./src/biscoitoAberto.png'));
  }

  const reset = (): void => {
    setFrase('Quebre o biscoito e veja a sorte!');
    setImg(require('./src/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Image 
        style={styles.img}
        source={img}
      />
      <Text style={styles.textoFrase}>{frase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoReset} onPress={reset}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTextoReset}>Nova Sorte</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botaoReset: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#dd7b22',
    marginTop: 10,
    backgroundColor: '#dd7b22',
  },
  btnTextoReset: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#dd7b22'
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    color: '#dd7b22',
    fontWeight: 'bold'
  }
});
