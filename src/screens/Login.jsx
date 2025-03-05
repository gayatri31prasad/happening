import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAuthContext } from '../constants/AuthContext'


const Login = (props) => {
  const { navigation } = props;
  const { setAlert, setWarning, isLoading, setIsLoading} = useAuthContext()

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../images/LogoImage.png')}  style={{width:240,height:100,marginBottom:10}}/>
        <Text style={{color:'#000',fontSize:20,fontFamily:'Poppins-Regular',textAlign:'center',marginVertical:20}}>Login now to finds whats{'\n'} happning around you</Text>
        <TextInput 
          placeholder='Email Address or Mobile Number'
          placeholderTextColor={'#ccc'}
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder='Click on send OTP'
          placeholderTextColor={'#ccc'}
          style={styles.inputStyle}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} style={{backgroundColor:'#7E2CCF',width:'80%',height:40,borderRadius:50,alignItems:'center',justifyContent:'center',marginTop:10}}>
          <Text style={{color:"#fff"}}>Login</Text>
        </TouchableOpacity>
        <View style={{alignItems:'flex-end',width:'80%',marginTop:10}}>
          <Text style={{color:'#7E2CCF',}} onPress={()=>{setWarning('Work in progress!')}}>Send OTP</Text>
        </View>
        <View style={{ alignItems:'center',gap:20,marginTop:40}}>
          <Text style={{color:"#aaa"}}>or</Text>
          <Text style={{color:"#aaa"}}>Sign in with other account</Text>
          <TouchableOpacity activeOpacity={1} onPress={()=>{setWarning('Work in progress!')}}>
            <Image style={{width:200,height:50,marginTop:5}} source={require('../images/ContinueWithSocial.png')}/>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  inputStyle:{
    borderWidth:1,
    borderColor:'#ccc',
    width:'80%',
    height:40,
    borderRadius:50,
    paddingHorizontal:20,
    marginVertical:5,
  }
})