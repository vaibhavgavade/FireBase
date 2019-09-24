import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {FirstOne,SecondOne,FourthScreen,BuyApp,FirebaseAuth} from './Src/scence/Index'


const AppStack = createStackNavigator({
    one:{
        screen:FirstOne
    },
    second:{
        screen:SecondOne
    },
   
    fourth:{
        screen:FourthScreen
    },
   buy:{
       screen:BuyApp
   },
   auth:{
       screen:FirebaseAuth
   }
  
})
export default createAppContainer(AppStack);