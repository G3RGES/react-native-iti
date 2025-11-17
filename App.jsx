import { ScrollView, Text } from 'react-native';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from 'screens/LoginScreen';
import SignupScreen from 'screens/SignupScreen';
import HomeScreen from 'screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <LoginScreen />
        <SignupScreen /> */}
      <HomeScreen />
    </SafeAreaView>
  );
}
