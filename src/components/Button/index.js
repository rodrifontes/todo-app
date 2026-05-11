import { Text } from '../Text';

import { Container } from './styles';

export default function Button({
  children,
  primary = true,
  onPress,
  disabled
}) {
  return (
    <Container disabled={disabled} onPress={onPress} primary={primary}>
      <Text color={primary ? '#fff' : '#333'}>{children}</Text>
    </Container>
  );
}