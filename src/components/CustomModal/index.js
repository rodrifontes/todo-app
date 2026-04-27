import { Modal } from 'react-native';

import { Text } from '../Text';

import { Overlay, Body } from './styles';

export default function CustomModal({ children }) {
  return (
    <Modal
      transparent
      statusBarTranslucent
    >
      <Overlay>
        <Body>
           {children}
        </Body>
      </Overlay>
    </Modal>
  );
}