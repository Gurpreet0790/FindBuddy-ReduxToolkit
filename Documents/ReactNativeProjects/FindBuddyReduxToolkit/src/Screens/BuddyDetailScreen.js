import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, StatusBar} from 'react-native';

const BuddyDetailScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Buddy Details Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default BuddyDetailScreen;
