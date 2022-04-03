import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 1rem 1.25rem;
  gap: 1rem;

  color: var(--text);
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  border: 1px solid var(--purple);
  border-radius: 8px;
  cursor: pointer;

  transition: all .3s ease-out;

  &:hover {
    background-color: var(--purple);
  }
`;
