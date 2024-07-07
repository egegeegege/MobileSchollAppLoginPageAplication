import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Login({navigation}) {

   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/OkulLogo')} // Logo için uygun bir yol belirtin
        style={styles.logo}
      />

      {/* TC Numarası Girişi */}
      <TextInput
        style={styles.input}
        placeholder="TC Numarası"
        keyboardType="numeric"
        maxLength={11} // TC numarasının uzunluğu için sınırlama
         placeholderTextColor="gray"
      />

      {/* Şifre Girişi */}
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={true} // Şifre girişi için gizli metin kullanımı
         placeholderTextColor="gray"
      />

      {/* Giriş Butonu */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

        <Text style={styles.or}>Yada</Text>
          <View style={styles.hr} />

     <View style={styles.createbutton}>
<TouchableOpacity style={styles.create}>
        <Text style={styles.createText} onPress={()=>navigation.navigate("Signin")}>Öğretmen Girişi</Text>
      </TouchableOpacity>
    </View>
     <View style={styles.copyrightcontainer}>
      <Text style={styles.copyright}>© 2024 A. GAREMTAL. Tüm hakları saklıdır.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40, // Logo'yu biraz daha yukarı kaydırmak için marginBottom değeri artırıldı
    resizeMode: 'contain', // Logo boyutunu ve görüntüleme modunu ayarlayın
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 15,
    marginTop :50
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
   or:{
    paddingTop:"20px",
    textAlign:"center",
    fontWeight:"500",
    fontSize:"16px",
    color:"black",
  },
  hr:{
     borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      width :340,
      marginVertical: 5,
      padding:4,
     fontWeight: '900',
  },
   createbutton:{
      flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
     paddingTop:"20px",
          padding:20
  },
  create:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#5BBCFF",
    borderRadius: 5,
    height: 40,
    width:"200px",
     marginBottom: 15,
  },
  createText:{
   fontSize:"15px",
   textAlign:"center",
    alignItems:"center",
    color:"white",
    fontWeight:"700",
    paddingHorizontal: 30,
  },
});
