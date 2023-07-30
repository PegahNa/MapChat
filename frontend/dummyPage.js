import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from './components/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from './components/card-dummy'; 
import CopyButtonComponent from './components/copyButton'; 
import ShareButtonComponent from './components/shareButton'; 

const DummyPage = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.header}>Dummy Page</Text>

      <CardComponent />
      <View style={commonStyles.buttonContainer}>
        <CopyButtonComponent />
        <ShareButtonComponent />
      </View>
    </SafeAreaView>
  );
};

export { DummyPage }