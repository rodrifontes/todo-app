import CustomModal from '../CustomModal';
import Button from '../Button';

import { Text } from '../Text';

import { ActionsContainer } from './styles';

export default function DeleteConfirmModal() {
  return (
    <CustomModal>
      <Text size={18} weight="600">Tem certeza que deseja remover a tarefa?</Text>
      <Text opacity={0.5} style={{ marginTop: 4 }}>Essa ação não podera ser desfeita</Text>
    
      <ActionsContainer>
        <Button primary={false}>Cancelar</Button>
        <Button>Confirmar</Button>
      </ActionsContainer>
    </CustomModal>
  );
}