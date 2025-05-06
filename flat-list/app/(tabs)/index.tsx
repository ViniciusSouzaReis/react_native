import { View, StyleSheet, FlatList, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { name: 'John Doe', age: 25, email: 'john.doe@example.com' },
          { name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
          { name: 'Alice Johnson', age: 22, email: 'alice.johnson@example.com' },
          { name: 'Bob Brown', age: 28, email: 'bob.brown@example.com' },
          { name: 'Charlie Davis', age: 35, email: 'charlie.davis@example.com' },
          { name: 'Emily White', age: 27, email: 'emily.white@example.com' },
          { name: 'Frank Green', age: 33, email: 'frank.green@example.com' },
          { name: 'Grace Black', age: 29, email: 'grace.black@example.com' },
          { name: 'Hank Blue', age: 31, email: 'hank.blue@example.com' },
          { name: 'Ivy Purple', age: 26, email: 'ivy.purple@example.com' },
        ]}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: '100%', backgroundColor: 'blue', marginVertical: 10 }}>
            <Text style={{ color: 'white' }}>{`Name: ${item.name}, Age: ${item.age}, Email: ${item.email}`}</Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <View style={{ height: 100, width: '100%', backgroundColor: 'red' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
