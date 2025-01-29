import React from 'react';
import { Modal, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';

interface LogOutModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogOutModal: React.FC<LogOutModalProps> = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <SafeAreaView style={style.modalOverlay}>
        <SafeAreaView style={style.modalContainer}>
          <Text style={style.modalTitle}>Log Out</Text>
          <Text style={style.modalMessage}>Are you sure you want to log out?</Text>
          <SafeAreaView style={style.modalButtons}>
            <TouchableOpacity style={style.modalButtonCancel} onPress={onClose}>
              <Text style={style.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.modalButtonLogout} onPress={onConfirm}>
              <Text style={style.modalTextLogout}>Log Out</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

export default LogOutModal;

const style = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: '#FFFCF0',
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 150,
    alignItems: 'center',
  },
  modalTitle: {
    marginTop: -5,
    marginBottom: 12,
    fontFamily: 'Medium',
    fontSize: 16,
  },
  modalMessage: {
    fontFamily: 'Regular',
    fontSize: 15,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButtonCancel: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalButtonLogout: {
    backgroundColor: '#FFDB36',
    padding: 10,
    marginHorizontal: 10,
    height: 40,
    width: 100,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#AFB1B6',
    shadowColor: '#000', 
    shadowOpacity: 0, 
    elevation: 5
  },
  modalButtonText: {
    fontFamily: 'Medium',
    color: '#404040',
    fontSize: 15,
  },
  modalTextLogout: {
    fontFamily: 'Bold',
    color: '#FFFFFF',
    fontSize: 15,
  },
});