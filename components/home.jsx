import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen({navigation}) {
  return (
    <View style={style.container}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#fff' }}>
          Bem-vindo ao App de Planetas!
        </Text>
        {/* <Image
          source={require('./assets/galaxy.jpg')}
          style={{ width: 10000, height: 200, marginTop: 10 }}
          resizeMode="contain"
        /> */}

  <Image source={require('../assets/galaxy.jpg')} style={{ width: 700, height: 200, marginTop: 10 }}/>
        <Text style={{ fontSize: 20, color: '#d6c423ff', marginTop: 10 }}>
          Conheça um pouco do universo!
        </Text>
        <Text style={{ fontSize: 15, color: '#fff', marginTop: 10 }}>
          Toque nos botões abaixo para explorar diferentes categorias:
        </Text>
      </View>

      <Pressable
        onPress={() => {navigation.navigate('Planetas')}}
        style={style.estilo_btn}
      >
        <Ionicons name="planet" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={{ color: '#222', fontWeight: 'bold' }}>Planetas</Text>
      </Pressable>
      <Pressable
        onPress={() => {navigation.navigate('Galaxias')}}
        style={style.estilo_btn}
      >
        <Ionicons name="star" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={{ color: '#222', fontWeight: 'bold' }}>Galaxias</Text>
      </Pressable>
      <Pressable
        onPress={() => {navigation.navigate('BuracoNegro')}}
        style={style.estilo_btn}
      >
        <Ionicons name="ellipse" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={{ color: '#222', fontWeight: 'bold' }}>Buraco Negro</Text>
      </Pressable>
    </View>
  );
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    container: {
      flex: 1,
      backgroundColor: '#222', // cinza escuro
      alignItems: 'center',
      justifyContent: 'center',
    },
    estilo_btn: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10, 
      backgroundColor: '#d6c423ff', 
      borderRadius: 15, 
      margin:10
    }
});
