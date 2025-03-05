import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAuthContext } from '../constants/AuthContext';
const ProductDetailsScreen = (props) => {
  const {navigation} = props;
  const [active,setActive] = useState(1);
  const [time, setTime] = useState('');
  const { setAlert, setWarning, isLoading, setIsLoading} = useAuthContext()

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
          <ImageBackground style={{width:'100%',height:250,justifyContent:'space-between'}} source={require('../images/arraheman.png')}>
             <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                <Ionicons name="chevron-back-circle" size={35} color="#ccc" onPress={()=>navigation.goBack()}/>
                <Ionicons name="share-social-sharp" size={30} color="#ccc"/>
             </View>
              <View style={{flexDirection:'row',marginLeft:10,}}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>setActive(1)} style={[styles.bgBtns]}><Text style={[{color:active == 1 ?'#7E2CCF':'#000'}]}>About</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>setActive(2)} style={[styles.bgBtns]}><Text style={[{color:active == 2 ?'#7E2CCF':'#000'}]}>Crew</Text></TouchableOpacity>
              </View>
          </ImageBackground>
          <ScrollView style={styles.infoContainer}>
              <Text style={{fontSize:18}}>The complete AR Rahman Show</Text>
              <View style={styles.favoriteContainer}>
                <View style={{flexDirection:'row',gap:5,alignItems:'center'}}>
                    <MaterialIcons name="favorite" size={20} color="#7E2CCF"/>
                    <Text>157 Interested</Text>
                </View>
                  <TouchableOpacity style={{flexDirection:'row',gap:5,alignItems:'center',paddingVertical:4,paddingHorizontal:10,backgroundColor:'#EEE6F9',borderRadius:5}}>
                  <MaterialIcons name="play-circle-outline" size={20} color="#7E2CCF"/>
                    <Text>Teasor</Text>
                  </TouchableOpacity>
                  <View style={{flexDirection:'row',gap:2,alignItems:'center'}}>
                    <MaterialCommunityIcons name="lightning-bolt" size={20} color="#FF935B"/>
                    <Text style={{color:"#FF935B"}}>Fast Falling</Text>
                  </View>
                  <MaterialIcons name="favorite-border" size={20} color="#aaa"/>
              </View>
              <View style={{flexDirection:'row',gap:20,justifyContent:'flex-start',alignItems:'center',marginTop:20}}>
                <View style={{flexDirection:'row',gap:5,alignItems:'center'}}>
                    <MaterialCommunityIcons name="timer-sand" size={20} color="#5F6368"/>
                    <Text>20h 30m</Text>
                </View>
                <View style={{flexDirection:'row',gap:5,alignItems:'center'}}>
                    <MaterialIcons name="person" size={20} color="#5F6368"/>
                    <Text>5 Years +</Text>
                </View>
                <View style={{flexDirection:'row',gap:5,alignItems:'center'}}>
                    <MaterialCommunityIcons name="music-circle-outline" size={20} color="#5F6368"/>
                    <Text>Bollywood, Retro</Text>
                </View>
              </View>
                <View style={{flexDirection:'row',gap:5,alignItems:'center',marginTop:20}}>
                    <AntDesign name="earth" size={17} color="#5F6368"/>
                    <Text>Hindi, Tamil</Text>
                </View>
                <View style={{flexDirection:'row',gap:5,alignItems:'center',marginTop:20}}>
                    <MaterialCommunityIcons name="calendar" size={20} color="#5F6368"/>
                    <Text>Sat 26.Oct.2024</Text>
                </View>
                <Text style={{marginTop:20}}>Price: ₹480 - ₹1580</Text>
                <View style={{width:'100%',alignSelf:'center',marginTop:20,height:1,backgroundColor:'#ccc'}}/>
                <View style={{flexDirection:'row',gap:5,alignItems:'center',marginTop:20}}>
                    <MaterialIcons name="location-pin" size={20} color="#5F6368"/>
                    <Text>North Avenue Grounds, Bangalore</Text>
                    <MaterialIcons name="info-outline" size={20} color="#5F6368"/>
                </View>
                <View style={{flexDirection:'row',gap:5,alignItems:'center',marginVertical:10}}>
                  <TouchableOpacity style={{paddingHorizontal:18,paddingVertical:6,borderWidth:1,borderColor:time?'#7E2CCF':'#ccc',borderRadius:20}} onPress={()=>setTime('19:00:00')}>
                    <Text style={{color:'#000',fontWeight:'600'}}>7:00 pm</Text>
                  </TouchableOpacity>
                  <Text style={{color:'#FF935B'}}>16 days left</Text> 
                </View>
                <View style={{flexDirection:'row',gap:10,alignItems:'center' }}>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'#5F6368'}}>P</Text>
                    <MaterialCommunityIcons name="wheelchair-accessibility" size={20} color="#5F6368" style={{textDecorationLine:'line-through'}}/>
                    <MaterialCommunityIcons name="silverware-fork-knife" size={20} color="#5F6368"/>
                    <MaterialCommunityIcons name="microsoft-windows-classic" size={20} color="#5F6368"/>
                  <Text style={{textDecorationLine:'underline'}}>4kms nearby</Text>
                </View>
                <View style={{width:'100%',alignSelf:'center',marginTop:20,height:1,backgroundColor:'#ccc'}}/>
                <View style={{marginTop:20,gap:5,marginBottom:100}}>
                  <Text style={styles.listHeading}>Policies & Rules</Text>
                  <Text style={{marginLeft:5,}}>•  Follow organiser guidelines</Text>
                  <Text style={{marginLeft:5,}}>•  Drugs, smoke and alcohol consumption prohibited</Text>
                  <Text style={{marginLeft:5,}}>•  Kids below 5 years not recommended</Text>
                  <Text style={styles.listHeading}>Offers for you</Text>
                  <Text style={{marginLeft:5,}}>•  Paytm 5% off for min value of ₹ 1500</Text>
                  <Text style={{marginLeft:5,}}>•  Use HSBC CC for 10% discount on any booking</Text>
                </View>
          </ScrollView>
                <View style={{width:'100%',padding:15,borderTopWidth:1,borderColor:'#ccc',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'flex-end',gap:25}}>
                  <Text style={{fontSize:16,color:"#5F6368",display:time?'none':'flex'}}>Select time slot to proceed</Text>
                  <TouchableOpacity style={{paddingHorizontal:18,paddingVertical:6,borderWidth:1,borderColor:'#ccc',borderRadius:20,backgroundColor:time?'#7E2CCF':'#EEE6F9'}} onPress={()=>{time ? navigation?.navigate('PaymentScreen') : setWarning("Please select a time")}}>
                    <Text style={{color:time?'#fff':"#7E2CCF"}}>Proceed</Text>
                  </TouchableOpacity>
                </View>
    </SafeAreaView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  topImageContainer:{

  },
  bgBtns:{
    paddingHorizontal:14,
    paddingVertical:5,
    backgroundColor:'#fff',
    borderTopRightRadius:5,
    borderTopLeftRadius:5
  },
  infoContainer:{
      width:'100%',
      alignSelf:'center',
      padding:10
  },
  favoriteContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:25
  },
  listHeading:{
    fontWeight:'600',
    fontSize:16,
    color:'#5F6368'
  }
})