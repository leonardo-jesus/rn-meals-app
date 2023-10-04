import { StyleSheet, Text, View } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 6,
  },
});

export default Subtitle;
