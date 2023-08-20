import styled from 'styled-components';

export const Label = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: rgb(63, 18, 145);
  display: flex;
  align-items: baseline;
  gap: 20px;
`;
export const Input = styled.input`
  font-size: 16px;
  font-weight: 300;
  width: 400px;
  height: 25px;
  padding: 4px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
