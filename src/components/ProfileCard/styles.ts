import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  background: var(--gradient);
  border-radius: 1.5rem;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  gap: 1rem;

  > span {
    width: 100%;
    font-size: 1rem;
    font-weight: bold;

    color: #fff;
    opacity: 0.4;

    letter-spacing: 0.64rem;
    text-transform: uppercase;
  }
`;
export const Avatar = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 16rem;
    height: 16rem;

    border-radius: 50%;
    flex-shrink: 1;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Identification = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-bottom: 1rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  gap: 16px;
`;

export const ProfileData = styled.p`
  width: 100%;
  font-size: 1rem;
  color: var(--text);
`;

export const Name = styled.h1`
  width: 100%;

  font-size: 2rem;
  font-weight: bold;
  color: var(--title);
`;

export const Username = styled.p`
  font-size: 1.25rem;
  color: var(--purple);
`;

export const Biography = styled.p`
  font-size: 1rem;
  color: var(--title);
  opacity: .6;
`

export const Icon = styled.div`
  display: flex;
  width: 1.2rem;
  height: 1.2rem;
`;
