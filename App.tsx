import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

function App(): JSX.Element {

  const Header = () => {
    return (
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>My Timer</Text>
      </View>
    );
  };
  
  const Screen = () => {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>להתחברות לאפליקציית טיימר אנא הזיו את מפר הטלפון והמייל שלכם</Text>
        <TextInput style={styles.input} placeholder="הקלד אימייל" />
        <TextInput style={styles.input} placeholder="הקלד מספר" />
      </View>
    );
  };
  
  const Footer = () => {
    return (
      <View>
        <TouchableOpacity style={styles.buttonBackground}>
        <Image source={require('./assets/login-button-arrow.png')} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.helpText}>צריך עזרה?</Text>
        <Text style={styles.connectText}>יצירת קשר עם התמיכה</Text>
      </View>
    );
  };

  return (
      <View style={styles.container}>
        <Header />
        <Screen />
        <Footer />
      </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 80,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    justifySelf: 'center',
    marginEnd: 90
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
    marginHorizontal: 32,
    marginTop: 32
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a0a0a0',
    marginBottom: 20,
    alignSelf: 'flex-end',

  },
  input: {
    height: 40,
    width: '95%',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
  buttonBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 80,
    width: 80,
    borderRadius: 40,
    marginStart: 32,
    marginBottom: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BF40BF'
  },
  arrow: {
    backgroundColor: '#BF40BF',
    borderRadius: 20,
    width: 30,
    height: 30
  },
  helpText: {
    marginEnd: 32,
    marginBottom: 4,
    color: '#a0a0a0',
    fontWeight: 'bold',
  },
  connectText: {
    marginEnd: 32,
    marginBottom: 82,
    color: '#0000EE',
  }
  
});

export default App;
