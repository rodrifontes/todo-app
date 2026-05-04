import Button from '../Button';
import CustomModal from '../CustomModal';

import { Text } from '../Text';

import { ActionsContainer } from './styles';

export default function DeleteConfirmModal({ visible, onClose, onConfirm }) {
  return (
    <CustomModal visible={visible} onClose={onClose}>
      <Text size={18} weight="600">Tem certeza que deseja remover a tarefa?</Text>
      <Text opacity={0.5} style={{ marginTop: 4 }}>Essa ação não podera ser desfeita</Text>

      <ActionsContainer>
        <Button onPress={onClose} primary={false}>Cancelar</Button>
        <Button onPress={onConfirm}>Confirmar</Button>
      </ActionsContainer>
    </CustomModal>
  );
}