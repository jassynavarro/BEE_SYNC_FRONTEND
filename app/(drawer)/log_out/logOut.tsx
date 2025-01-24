import { StatusBar } from "expo-status-bar";
import {Button, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Modal } from '../log_out/Modal';
import { useState } from "react";
import { router } from "expo-router";

// THIS IS THE LOG OUT LAYOUT.

export default function out() {
  const [islogOutOpen, setLogoutOpen] = useState(false)
  return (
    <SafeAreaView style={style.view}>

      <StatusBar style="auto" />
      <Button title="LOG OUT" onPress={() => setLogoutOpen(true)}></Button>
      <Modal isOpen={islogOutOpen}>
        <SafeAreaView style={style.container}>
          <Text style={style.textLogout}>Log Out</Text>
          <Text style={style.textPhrase}>Are you sure you want to logout?</Text>
          
          <Pressable style={style.cancelButton} onPress={() => {
            setLogoutOpen(false)
          }}>
            <Text style={style.cancelText}>Cancel</Text>
          </Pressable>

          <TouchableOpacity style={style.logOut_button} onPress={()=>router.push('/')}>
            <Text style={style.logout_buttonText}>Log Out</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  container: {
    backgroundColor: '#FFFCF0',
    height: 240,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
    borderRadius: 10
  },
  textLogout: {
    position: 'absolute',
    top: 30,
    fontFamily: 'Medium',
    fontSize: 18,
    color: '#404040'
  },
  textPhrase: {
    position: 'absolute',
    top: 100,
    fontFamily: 'Regular',
    fontSize: 18,
    color: '#404040'
  },
  cancelButton: {
    position: 'absolute',
    top: 167,
    left: 60,
  },
  cancelText: {
    fontFamily: 'Medium',
    fontSize: 18,
    color: '#404040'
  },
  logOut_button: {
    position: 'absolute',
    justifyContent: 'center',
    top: 160,
    right: 20,   
    backgroundColor: '#FFDB36',
    height: 40,
    width: 150,
    borderRadius: 10,
    borderColor: '#AFB1B6',
    shadowColor: '#000', 
    shadowOpacity: 0, 
    elevation: 5
  },
  logout_buttonText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 16,   
    fontFamily: 'Bold',
  }
})