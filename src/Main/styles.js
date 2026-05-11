import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.5;
`;

export const TaskEmpty = styled.Image`
  margin-top: 48px;
  margin-bottom: 12px;
  width: 150px;
  height: 150px;
`;