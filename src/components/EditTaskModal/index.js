import { Image, TouchableOpacity } from 'react-native';
import CustomModal from '../CustomModal';

import { Text } from '../Text';
import { Header } from './styles';

import close from '../../assets/images/close.png';

export default function EditTaskModal({ visible, onClose }) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
    >
      <Header>
        <Text weight="600">Editar Tarefa</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>
    </CustomModal>
  );
}