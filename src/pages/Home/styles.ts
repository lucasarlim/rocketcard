import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  gap: 3rem;

  width: 100%;
  height: 100vh;

  background: var(--background);
  background-size: cover;
  overflow: hidden;

  .bubble-left {
    position: absolute;
    width: 321px;
    height: 321px;

    bottom: 0%;
    left: 0%;

    background: #996dff;
    filter: blur(400px);
  }

  .bubble-right {
    position: absolute;

    width: 321px;
    height: 321px;

    top: 0%;
    right: 0%;

    background: #996dff;
    filter: blur(400px);
  }

  @media (max-width: 600px){
    overflow: auto;

    flex-wrap: wrap-reverse;
  }
`;

export const CustomCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-size: .875rem;
    color: var(--text);

    margin-top: 2rem
  }

`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 1.5rem;

  > label {
    font-size: .875rem;
    font-weight: 600;
    color: var(--title);
  }
`
