import styled from "styled-components"

export const Fondo = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;
`

export const ContainerApp = styled.div`
  margin: auto;
  position: relative;
  width: 1024px;
  height: 600px;
  padding: 30px 100px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 24px;
`

export const ContentApp = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: start;

  h1 {
    letter-spacing: 0.1em;
  }

  p {
    letter-spacing: 0.05em;
    width: 400px;
  }

  button {
    display: block;
    margin-top: 50px;
    padding: 14px 24px;
    width: auto;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
      transform: scale(1.02);
    }
  }
`
