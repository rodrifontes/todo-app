import { Text } from '../Text';

import { Container } from './styles';

export default function Button({ children, primary = true }) {
  return (
    <Container>
      <Text color={primary ? '#fff' : '#333'}>{children}</Text>
    </Container>
  );
}