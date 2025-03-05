import { StyleSheet, Text, View ,SafeAreaView, Touchable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuthContext } from '../constants/AuthContext';
const PaymentScreen = (props) => {
  const {navigation} = props;
  const { setAlert, setWarning, isLoading, setIsLoading} = useAuthContext()

const [paymentDetails, setPaymentDetails] = useState([
  {name:"platinum Class ₹ 1,480 ", seats:"8 seats left",quantity:1},
  {name:"Gold Class  ₹ 800 ", seats:"8 seats left",quantity:0},
  {name:"platinum Class ₹ 1,480 ", seats:"8 seats left",quantity:0},
])


const increaseSeats = (seatNo, operator)=>{
  let prevSeats = paymentDetails
  if('add' == operator)
    prevSeats[seatNo].quantity += 1; 
  else
    prevSeats[seatNo].quantity = prevSeats[seatNo].quantity == 0 ? 0 : prevSeats[seatNo].quantity - 1; 
    setPaymentDetails([...prevSeats])
  }

  const PriceCard =({item,index})=>{
    const {name,seats,quantity} = item;
    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',gap:10,padding:15,borderWidth:2,borderColor:"#F9F5FD"}}>
        <View style={{flexDirection:'row',alignItems:'center' ,gap:10}}>
            <MaterialCommunityIcons name="ticket-confirmation" size={20}/>
              <Text>{name}</Text>
              <Text style={{color:'#FF935B'}}>{seats}</Text>
        </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',gap:10}}>
            <AntDesign name="minussquareo" size={20} style={{color:'#7E2CCF',backgroundColor:'#F9F5FD'}} onPress={()=>increaseSeats(index,'sub')}/>
            <Text>{quantity}</Text>
            <AntDesign name="plussquareo" size={20} style={{color:'#7E2CCF',backgroundColor:'#F9F5FD'}} onPress={()=>increaseSeats(index,'add')}/>
          </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff',padding:20}}>
      <View style={styles.seatsContainer}>
        <Text style={{alignSelf:'center',width:150,textAlign:'center',backgroundColor:'#ccc',padding:5,paddingHorizontal:15,borderRadius:8,marginBottom:20}}>Stage</Text>
        <Text style={{backgroundColor:'#ABAAD4',width:'100%',textAlign:'center',padding:15,marginBottom:1}}>Platinum Class ₹ 1,480</Text>
        <Text style={{backgroundColor:'#FAC38C',width:'100%',textAlign:'center',padding:20,marginBottom:1}}>Gold Class ₹ 800</Text>
        <Text style={{backgroundColor:'#DBDBDB',width:'100%',textAlign:'center',padding:30, borderBottomRightRadius:10,borderBottomLeftRadius:10}}>Silver Class ₹ 480</Text>
      </View>
      <Text style={{ width:'100%',textAlign:'center', marginTop:10,fontSize:15,color:'gray',marginBottom:20 }}>Seats Layout</Text>
      <View style={styles.cardPriceContainer}>
          {paymentDetails?.map((item,index)=><PriceCard key={index} item={item} index={index}/>)}
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',position:'absolute',bottom:0,width:'110%',borderTopWidth:1,borderTopColor:'#E5E5E5',alignSelf:'center',padding:10}}>
        <View>
          <Text style={{color:'gray'}}><Text style={{color:"#7E2CCF",fontWeight:'bold',fontSize:20}}>₹ 1,480</Text>   for 1 seat</Text>
          <Text  style={{color:'gray',fontSize:15,marginTop:5}}>+199 tax & fees</Text>
        </View> 
        <TouchableOpacity style={{paddingHorizontal:18,paddingVertical:6,borderWidth:1,borderColor:'#ccc',borderRadius:20,backgroundColor: '#7E2CCF' }} onPress={()=>{ setAlert("Payment done!.");navigation.goBack();navigation.goBack();}}>
          <Text style={{color:"#fff"}}>Pay Now</Text>
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  seatsContainer:{
    borderWidth:2,
    borderColor:'#EEE6F9',
    marginTop:10,
    borderRadius:10
  },
  cardPriceContainer:{

  }
})