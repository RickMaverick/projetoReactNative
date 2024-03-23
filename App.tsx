import {View} from 'react-native';
import PaginaInicial from './components/PaginaInicial';
import Contato from './components/Contato';

export default function App(){
  return (
    <View>
      <PaginaInicial/>
      <Contato/>
    </View>
  );
}