import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-grow: 1;
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    text-align: left;
  }
  input, textarea, select {
    margin-bottom: 15px;
  }
`;
