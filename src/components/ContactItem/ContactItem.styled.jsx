import styled from 'styled-components';

export const ContactStyle = styled.li`
  display: flex;
  gap: 50px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 400;
  width: 400px;
`;
export const Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  width: 70px;
  height: 45px;
  // padding: 10px;
  border-radius: 5px;
  background-color: rgb(83, 147, 147);
  &:hover {
    cursor: pointer;
    background-color: rgb(49, 60, 156);
  }
`;
