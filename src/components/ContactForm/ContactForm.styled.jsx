import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: baseline;
  gap: 30px;
`;
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
export const Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  // width: px;
  height: 45px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(83, 147, 147);
  &:hover {
    cursor: pointer;
    background-color: rgb(49, 60, 156);
  }
`;
