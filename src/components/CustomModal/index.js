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
      <Overlay>
        <Body>
          {children}
        </Body>
      </Overlay>
    </Modal>
  );
}