import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Cadastro({navigation}){
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return(
    <View>
      <View>
        <Image
        style={styles.imgStyleRegister}
        source={logo}></Image>
      </View>
      <View style={styles.loginAreas}>
        <Text
        style={styles.titleTextsRegister}>Nome</Text>
        <TextInput
        value={nome}
        placeholder="Cadastre seu Nome"
        onChangeText={text => {
          setNome(text);
      }}
        style={styles.textBoxRegister}
        ></TextInput>
      </View>
      <View style={styles.loginAreas}>
        <Text
        style={styles.titleTextsRegister}>CPF</Text>
        <TextInput
        value={cpf}
        placeholder="Cadastre seu CPF"
        onChangeText={text => {
          setCpf(text);
        }}
        style={styles.textBoxRegister}
        ></TextInput>
      </View>
      <View style={styles.loginAreas}>
        <Text
        style={styles.titleTextsRegister}>Telefone</Text>
        <TextInput
        value={telefone}
        placeholder="Cadastre seu telefone"
        onChangeText={text => {
          setTelefone(text);
        }}
        style={styles.textBoxRegister}
        ></TextInput>
      </View>
      <View style={styles.loginAreas}>
        <Text
        style={styles.titleTextsRegister}>E-mail</Text>
        <TextInput
        value={email}
        placeholder="Cadastre seu e-mail"
        onChangeText={text => {
          setEmail(text);
        }}
        style={styles.textBoxRegister}
        ></TextInput>
      </View>
      <View style={styles.loginAreas}>
        <Text
        style={styles.titleTextsRegister}>Senha</Text>
        <TextInput
        value={senha}
        placeholder="Cadastre sua senha"
        secureTextEntry={true}
        onChangeText={text => {
          setSenha(text);
        }}
        style={styles.textBoxRegister}
        ></TextInput>
        <StatusBar style="auto" />
      </View>
      <View>
        <TouchableOpacity
        style={styles.buttonFormatRegister}
        ><Text style={styles.textButton}>Cadastrar</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loginAreas: {
    alignItems: 'center',
  },
  titleTexts: {
    marginRight: 200,
    fontSize: 17,
    color: 'white',
  },
  textBox: {  
    width: 250, 
    height: 50, 
    borderRadius: 20, 
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  linkTexts: {
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 5,
    color: 'blue',
  },
  buttonFormat: {
    backgroundColor: 'blue',
    width: 250, 
    height: 50,
    alignSelf: 'center',
    borderRadius: 30, 
    paddingTop: 11,
  },
  buttonFormatRegister: {
    backgroundColor: 'blue',
    width: 300, 
    height: 50,
    alignSelf: 'center',
    borderRadius: 30, 
    paddingTop: 11,
  },
  imgStyle: {
    width: 250, 
    height: 190, 
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 15,
  },
  textButton: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'space-between',
    fontSize: 20,
  },
  imgStyleRegister: {
    width: 220, 
    height: 165, 
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  titleTextsRegister: {
    alignSelf: 'flex-start',
    marginLeft: 50,
    fontSize: 17,
  },
  textBoxRegister: {
    borderWidth:2, 
    borderColor:"#0D0157", 
    width: 300, 
    height: 50, 
    borderRadius: 10, 
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginTextIcon: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  imgStyleIcon: {
    marginTop: 4,
    marginRight: 10,
    marginLeft: 20,
  },
  loginTexts: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor:'none',
    marginLeft: 70,
    height: 50,
  },
  forgetPassword: {
    marginTop: 1,
    fontSize: 12,
    color: 'white',
  },
  auxTexts: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 5,
    alignSelf: 'center',
  },
  imgBack:{
    flex: 1,
  },
  menuSquare: {
    position: 'absolute',
    alignSelf: 'center',
    width: 320,
    height: 330,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 0,
    marginTop: 120,
    borderRadius: 40,
  },
});