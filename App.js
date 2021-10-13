import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from './src/constants';
import {ArticlesList} from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ArticlesList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
});

export default App;
