import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ primary }) => primary ? '#FA824C' : '#fff'};
  border-color: #FA824C;
  border-width: 1px;
  border-radius: 12px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center; 
`;