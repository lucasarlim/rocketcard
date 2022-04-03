import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  padding: 12px 16px;

  background-color: var(--purple);

  border: 2px solid var(--border);
  border-radius: 8px;

  font-size: 1rem;
  color: var(--title);

  ::-webkit-input-placeholder{
    font-size: 1rem;
    color: var(--text);
  }

`