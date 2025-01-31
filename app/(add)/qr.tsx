import React from 'react';
import { Modal, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// THIS IS THE QR CODE MODAL

interface QRCodeModalProps {
  visible: boolean;
  onClose: () => void;
  hiveId: number | null; // Accept the hiveId prop
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ visible, onClose, hiveId }) => {
  if (hiveId === null) {
    return null; // Don't render if hiveId is null or not set yet
  }

  // Create the QR code content with the hiveId
  const qrContent = `https://bee_sync.com/join?hiveId=${hiveId}`;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalOverlay}>
        <SafeAreaView style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Your QR Code</Text>
          {/* Generate QR code with the hiveId */}
          <QRCode value={qrContent} size={150} />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
};

export default QRCodeModal;

const styles = StyleSheet.create({
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
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'Medium',
    fontSize: 18,
    color: '#404040',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#FFDB36',
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    fontFamily: 'Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
});
