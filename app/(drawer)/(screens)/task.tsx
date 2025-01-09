import { SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native'
import Images from '../../../constants/images';

// THIS IS THE HIVEMATE'S TASK LIST PAGE

const task = () => {
  return (
    <ImageBackground source={Images.Pattern} style={ style.background }>
      <SafeAreaView>
        <ScrollView style={ style.scrollView }>

            <SafeAreaView style={ style.boxes }>
              <Image style={ style.profile } source={Images.Profile7}></Image>
              <Text style={ style.name }>Mikasa</Text>
              <TouchableOpacity style={style.button} onPress={()=>{}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={ style.boxes }>
            <Image style={ style.profile } source={Images.Profile8}></Image>
              <Text style={ style.name }>Eren</Text>
              <TouchableOpacity style={style.button} onPress={()=>{}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={ style.boxes }>
            <Image style={ style.profile } source={Images.Profile1}></Image>
              <Text style={ style.name }>Armin</Text>
              <TouchableOpacity style={style.button} onPress={()=>{}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={ style.boxes }>
            <Image style={ style.profile } source={Images.Profile2}></Image>
              <Text style={ style.name }>Levi</Text>
              <TouchableOpacity style={style.button} onPress={()=>{}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={ style.boxes }>
            <Image style={ style.profile } source={Images.Profile3}></Image>
              <Text style={ style.name }>Erwin</Text>
              <TouchableOpacity style={style.button} onPress={()=>{}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={ style.boxes }>
            <Image style={ style.profile } source={Images.Profile4}></Image>
              <Text style={ style.name }>Historia</Text>
              <TouchableOpacity style={style.button} onPress={()=>{}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
            </SafeAreaView>
            
            <SafeAreaView style={ style.boxes }>
            <Image style={ style.profile } source={Images.Profile5}></Image>
              <Text style={ style.name }>Hange</Text>
              <TouchableOpacity style={style.button} onPress={()=>{}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={ style.boxes }>
            <Image style={ style.profile } source={Images.Profile6}></Image>
              <Text style={ style.name }>Annie</Text>
              <TouchableOpacity style={style.button} onPress={()=>{}}>
                <Text style={style.buttonText}>View Task</Text>
              </TouchableOpacity>
            </SafeAreaView>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}
export default task

const style = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15
  },
  background: {
    flex: 1,
    backgroundColor: '#FFFCF0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxes: {
    width: 320,
    height: 70,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    borderColor: '#AFB1B6',
    borderWidth: 1.5,
  },
  profile: {
    alignSelf: 'flex-start',
    marginLeft: 7,
    marginTop: 8,
    height: 50,
    width: 50
  },
  name: {
    fontFamily: 'Bold',
    fontSize: 18,
    color: '#61646B',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: -38,
    marginLeft: 70,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: -31,
    marginRight: -200,    
    backgroundColor: '#FFDB36',
    height: 35,
    width: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,   
    fontFamily: 'Medium',
    marginLeft: 12
  }
})
