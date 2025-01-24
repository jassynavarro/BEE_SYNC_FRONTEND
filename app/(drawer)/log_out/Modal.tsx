import {Modal as RNModal, ModalProps, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PROPS = ModalProps & {
  isOpen: boolean
}

export const Modal = ({ isOpen, children, ...rest}: PROPS) => {
    const content = (
        <SafeAreaView style={style.container}>{children}</SafeAreaView>
    )


    return (
        <RNModal
            visible={isOpen}
            transparent
            animationType='fade'
            statusBarTranslucent
            {...rest}
        >
            {content}
        </RNModal>
    )
}

const style = StyleSheet.create({
  container: {
    position: 'fixed',
    overflow: 'hidden',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AFB1B6',
  },

})