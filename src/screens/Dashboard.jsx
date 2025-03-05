import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Dashboard = (props) => {
  const {navigation} = props;
  const [typeOfEvent,setTypeOfEvent] = React.useState(1);
  const [location, setLocation] = useState(false);
  const categoriesList =[
    {image:require('../images/p1.png'),text:'Plays'},
    {image:require('../images/p2.png'),text:'Pets Show'},
    {image:require('../images/p3.png'),text:'Concert'},
    {image:require('../images/p4.png'),text:'Magician'},
    {image:require('../images/p5.png'),text:'Air Show'},
    {image:require('../images/p6.png'),text:'Exhibition'},
    {image:require('../images/p7.png'),text:'Launch'},
    {image:require('../images/p8.png'),text:'Food Fest'},
    {image:require('../images/p9.png'),text:'Dance'},
    {image:require('../images/p10.png'),text:'Premiere'},
    {image:require('../images/p11.png'),text:'Sports'},
    {image:require('../images/p12.png'),text:'Carnival'},
    {image:require('../images/p13.png'),text:'Talks'},
    {image:require('../images/p14.png'),text:'Trade Fair'},
  ]

  const seasonalEvents =[
    {image:require('../images/s1.png'),text:'Diwali'},
    {image:require('../images/s2.png'),text:'Halloween'},
    {image:require('../images/s3.png'),text:'Christmus'},
    {image:require('../images/s4.png'),text:'Eid'},
    {image:require('../images/s5.png'),text:'Dussehra'},
  ]
  const offers =[
    {image:require('../images/ou1.png'),text:'Early Bird Offer of 10%'},
    {image:require('../images/ou2.png'),text:'Rs. 250 Off IND-NZ Test'},
    {image:require('../images/ou3.png'),text:'Buy 2 get 1 free offer'},
    {image:require('../images/ou4.png'),text:'20% off for group'},
  ]

  const categorys =(image,text)=>{
    return<TouchableOpacity key={text} activeOpacity={0.5} style={{margin:8,position:'relative'}}>
      <Image source={image} style={{width:100,height:100,borderRadius:6}} />
      <Text style={{color:'#000',fontWeight:'600',textAlign:'center',backgroundColor:'#ffffff99',position:'absolute',bottom:0,width:'100%',padding:2}}>{text}</Text>
    </TouchableOpacity>
  } 
  const OfferForYou =(image,text)=>{
    return<TouchableOpacity key={text} activeOpacity={0.5} style={{margin:8,position:'relative'}}>
      <Image source={image} style={{width:120,height:80,borderRadius:6}} />
      <Text style={{ backgroundColor:'#00000060',color:'white',fontWeight:'600',textAlign:'center',position:'absolute',bottom:20,width:'100%',padding:2}}>{text}</Text>
    </TouchableOpacity>
  } 
 
  const mostpopularCard = (image) =>{
    return(
      <TouchableOpacity key={''+Math.random(1,10)} activeOpacity={0.8} style={{margin:10}} onPress={()=>navigation.navigate("ProductDetailsScreen")}>
        <Image source={image} style={{width:320,height:120,borderRadius:8}} resizeMode='stretch'/>
      </TouchableOpacity>
    )
  }

  const ContinueBooking = (image) =>{
    return<TouchableOpacity key={''+Math.random(1,10)} style={{margin:10}}>
      <Image source={image} style={{height:80,width:130,borderRadius:8}} resizeMode='stretch'/>
    </TouchableOpacity>
  }


  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff",padding:10}}>
      <Image style={{width:100,height:40,alignSelf:'center',marginBottom:10}} source={require('../images/LogoImage.png')}/>
      <TouchableOpacity style={{position:'absolute',top:18,right:10}}>
      <Image source={require('../images/bellIcon.png')} style={{width:30,height:30}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationContainer} onPress={()=>setLocation(true)}>
        <Ionicons name="location-outline"size={25}/>
        <View>
          <Text style={{color:"#7E2CCF",fontSize:15,fontWeight:'600'}}>Bengalore</Text>
          <Text>#2 KR Layout, Indiranagar</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={()=>setTypeOfEvent(1)} style={[styles.switchBtn,{borderTopLeftRadius:8,borderBottomLeftRadius:8,borderColor:typeOfEvent == 1 ? '#7E2CCF':'#EEE6F9'}]}><Text>Entertainment</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setTypeOfEvent(2)} style={[styles.switchBtn,{borderColor:typeOfEvent == 2 ? '#7E2CCF':'#EEE6F9'}]}><Text>Academic</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setTypeOfEvent(3)} style={[styles.switchBtn,{borderTopRightRadius:8,borderBottomRightRadius:8,borderColor:typeOfEvent == 3 ? '#7E2CCF':'#EEE6F9'}]}><Text>Volunteering</Text></TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.cardheader}>Pick your category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <View style={{flexDirection:'row'}}>
                {categoriesList.filter((item,index)=>index<7).map((item,index)=>categorys(item.image,item.text))}
              </View>
              <View style={{flexDirection:'row'}}>
              {categoriesList.filter((item,index)=>index>=7).map((item,index)=>categorys(item.image,item.text))}
              </View>
            </View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.cardheader}>Most Popular</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection:'row'}}>
                {[{image:require('../images/mp1.png')},{image:require('../images/mp2.png')},{image:require('../images/mp3.png')}].map((item,index)=>mostpopularCard(item.image))}
              </View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.cardheader}>Resume your booking</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection:'row'}}>
                {[{image:require('../images/con1.png')},{image:require('../images/con2.png')}].map((item,index)=>ContinueBooking(item.image))}
              </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.cardheader}>Recommended for you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection:'row'}}>
                {[{image:require('../images/mp3.png')},{image:require('../images/mp2.png')},{image:require('../images/mp1.png')}].map((item,index)=>mostpopularCard(item.image))}
              </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.cardheader}>Offers for you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection:'row'}}>
                {offers.map((item,index)=>OfferForYou(item.image,item.text))}
              </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.cardheader}>Seasonal Events</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection:'row'}}>
                {seasonalEvents.map((item,index)=>categorys(item.image,item.text))}
              </View>
          </ScrollView>
        </View>

      </ScrollView>
      <Modal visible={location} animationType="slide" transparent>
        <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}>
        <View style={{height:400,backgroundColor:'#fff',marginTop:'auto',borderTopLeftRadius:20,borderTopRightRadius:20 ,padding:20}}>
          <Text style={{fontSize:20,fontWeight:'500'}}>Select your location</Text>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:10 ,gap:20}}>
            <Text  style={{fontSize:15}}>Phone location permission</Text>
            <MaterialCommunityIcons name="toggle-switch-outline" size={30} color="#7E2CCF"/>
          </View>
          <Text style={{fontSize:18,fontWeight:'500',marginTop:10}}>Current location</Text>
          <View style={[styles.locationContainer,{marginTop:10,justifyContent:'space-between'}]}>
            <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
              <Ionicons name="location-outline"size={25}/>
                <View>
                  <Text style={{color:"#7E2CCF",fontSize:15,fontWeight:'600'}}>Bengalore</Text>
                  <Text>#2 KR Layout, Indiranagar</Text>
                </View>
            </View>
            <MaterialCommunityIcons name="radiobox-marked" size={30} color="#7E2CCF"/>
          </View>
          <Text style={{fontSize:18,fontWeight:'500',marginTop:10}}>Recent location</Text>
          <View style={[styles.locationContainer,{marginTop:10,justifyContent:'space-between',backgroundColor:'transparent'}]}>
            <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
              <Ionicons name="location-outline"size={25}/>
                  <Text style={{fontVariant:'500',fontSize:15}}>Zensar IT Park Kharadi, Bangalore</Text>
            </View>
            <MaterialCommunityIcons name="radiobox-blank" size={30} color="#aaa" onPress={()=>{setLocation(false)}}/>
          </View>
          <View style={[styles.locationContainer,{marginTop:10,justifyContent:'space-between',backgroundColor:'transparent'}]}>
            <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
              <Ionicons name="location-outline"size={25}/>
                  <Text style={{fontVariant:'500',fontSize:15}}>Eon IT Park Kharadi, Bangalore</Text>
            </View>
            <MaterialCommunityIcons name="radiobox-blank" size={30} color="#aaa" onPress={()=>{setLocation(false)}}/>
          </View>
           <TouchableOpacity style={{marginTop:10,paddingHorizontal:18,paddingVertical:6,borderWidth:1,borderColor:'#ccc',borderRadius:20,backgroundColor: '#7E2CCF',alignSelf:'flex-end'}} onPress={()=>{setLocation(false)}}>
              <Text style={{color:"#fff"}}>Proceed</Text>
           </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    locationContainer:{
    gap:10,
    height:50,
    padding:10,
    width:'100%',
    borderRadius:10,
    alignSelf:'center',
    flexDirection:"row",
    alignItems:'center',
    backgroundColor:'#F9F5FD',
  },
  switchContainer:{
    flexDirection:'row',
    marginTop:20,
    alignSelf:'center',
  },
  switchBtn:{
    width:120,
    borderWidth:2,
    borderColor:'#CCC',
    padding:5,
    borderColor:'#EEE6F9',
    alignItems:'center',
  },
  cardheader:{
    color:'#000',
    fontSize:20,
    fontWeight:'600',
    marginTop:10,
  }
})