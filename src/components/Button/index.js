import { Text } from '../Text';

import { Container } from './styles';

export default function Button({ children, primary = true, onPress }) {
  return (
    <Container onPress={onPress} primary={primary}>
      <Text color={primary ? '#fff' : '#333'}>{children}</Text>
    </Container>
  );
}