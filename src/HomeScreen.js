import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={style.container}>
            <Text style={style.text}>Home Screen</Text>
            <Button 
            style={style.buttonStyle} 
            icon={() => (
                <Image
                    source={require('../assets/icons.jpg')}
                    style={{width:25, height:25, borderRadius: 10}}
                />
            )}
            mode='contained' 
            onPress={()=>navigation.navigate('Details')}
            labelStyle={style.buttonStyle}
            buttonColor='aqua'
            >
            Go to details
            </Button>
        </View>
    )
}
export default HomeScreen;

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    },
    buttonStyle:{
        fontWeight: "bold",
        color: "black"
    }
  });