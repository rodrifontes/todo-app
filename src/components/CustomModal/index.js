import { Modal } from 'react-native';


import { Body, Overlay } from './styles';

export default function CustomModal({ children, visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent
      statusBarTranslucent
      animationType='fade'
      onRequestClose={onClose}
    >
      <Overlay behavior='padding'>
        <Body>
          {children}
        </Body>
      </Overlay>
    </Modal>
  );
}