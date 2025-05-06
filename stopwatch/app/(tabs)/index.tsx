import { type ReactElement, useState, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function HomeScreen(): ReactElement {
  const [timer, setTimer] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = (): void => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 0.1);
      }, 100);
    }
  };

  const stopTimer = (): void => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = (): void => {
    stopTimer();
    setTimer(0);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/pngwing.png')}
        style={styles.cronometer}
      />
      <Text style={styles.timer}>{timer.toFixed(2)}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={startTimer} disabled={intervalRef.current === null ? false : true}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopTimer}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  cronometer: {
    width: 400,
    height: 400
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#00aeef',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
