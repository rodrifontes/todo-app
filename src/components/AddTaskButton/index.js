import { Text } from '../Text';

import { Container } from './styles';

export default function AddTaskButton({ onPress }) {  
  return (
    <Container onPress={onPress}>
      <Text color="#FFF" size={40}>+</Text>
    </Container>
  );
}