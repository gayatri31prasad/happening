import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import { NavigationContainer } from "@react-navigation/native"
import PaymentScreen from "../screens/PaymentScreen"
import { AuthContextRapper } from "./AuthContext"
import Dashboard from "../screens/Dashboard"
import Login from "../screens/Login"

const StackNavigation = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
        <AuthContextRapper>
            <StackNavigation.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
                <StackNavigation.Screen name="Login" component={Login}/>
                <StackNavigation.Screen name="Dashboard" component={Dashboard}/>
                <StackNavigation.Screen name="ProductDetailsScreen" component={ProductDetailsScreen}/>
                <StackNavigation.Screen name="PaymentScreen" options={{headerShown: true,title:"Select Seats"}} component={PaymentScreen}/>
            </StackNavigation.Navigator>
        </AuthContextRapper>
    </NavigationContainer>
  )
}

export default Navigation