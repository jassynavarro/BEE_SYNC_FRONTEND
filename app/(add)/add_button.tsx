import { StyleSheet, Text, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Images from '../../constants/images';

const add_button = () => {
  return (
    <ImageBackground source={Images.Pattern} style={ style.background }>
      <SafeAreaView>
        <Image style={ style.display_picture } source={Images.DP}></Image>
        <TouchableOpacity style={style.QRbutton} onPress={()=>{}}>
          <Text style={style.QRbuttonText}>Generate your QR</Text>
        </TouchableOpacity>    
        <Text style={style.orText}>or</Text>    
        <Text style={style.searchText}>Search the Username</Text>    
        <TextInput style={style.searchBar}></TextInput> 
        <TouchableOpacity style={style.doneButton} onPress={()=>{}}>
          <Text style={style.doneText}>Done</Text>
        </TouchableOpacity>    
      </SafeAreaView>
    </ImageBackground>
  )
}
export default add_button

const style = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFCF0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  display_picture: {
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 40,
    height: 130,
    width: 130
  },
  QRbutton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 100,   
    backgroundColor: '#FFFFFF',
    height: 70,
    width: 248,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#AFB1B6',
    shadowColor: '#000', 
    shadowOpacity: 0, 
    elevation: 5
  },
  QRbuttonText: {
    marginRight: 12,
    textAlign: 'center',
    color: '#404040',
    fontSize: 20,   
    fontFamily: 'SemiBold',
    marginLeft: 12
  },
  orText: {
    textAlign: 'center',
    color: '#61646B',
    fontSize: 20,   
    fontFamily: 'Medium',
    marginTop: -70,
    marginBottom: 40 
  },
  searchText: {
    textAlign: 'center',
    color: '#61646B',
    fontSize: 15,   
    fontFamily: 'Medium',
    marginTop: -10,
    marginBottom: 40, 
    marginRight: 85
  },
  searchBar: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -30,
    marginBottom: 100,  
    backgroundColor: '#FFFFFF',
    height: 48,
    width: 248,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#404040'
  },
  doneButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -40,
    marginBottom: 100,   
    backgroundColor: '#FFDB36',
    height: 60,
    width: 260,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#AFB1B6',
    shadowColor: '#000', 
    shadowOpacity: 0, 
    elevation: 5
  },
  doneText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 32,   
    fontFamily: 'SemiBold',
    marginLeft: 12    
  }
})