import styled from "styled-components"

export const ContainerHome = styled.section`
  position: relative;
  margin: auto;
  max-width: 1024px;
  max-height: 700px;
  padding: 30px 100px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 24px;
`
export const ContentHome = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: start;

  h1 {
    display: block;
    letter-spacing: 0.1em;
    z-index: 2;

    span {
      z-index: 4;
    }
  }

  p {
    letter-spacing: 0.05em;
    width: 400px;
    line-height: 1.2em;
  }

  button {
    display: block;
    margin: 40px 0 5px 0;
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

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    img {
      width: 40px;
    }
  }
`
export const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;
  height: 100%;

  div {
    position: relative;
    width: 100%;
    height: 100%;
    &:first-child {
      img {
        position: absolute;

        top: 12%;
        left: 10%;
        width: 80px;
      }
    }

    &:last-child {
      img {
        position: absolute;
        &:first-child {
          top: 15%;
          right: 50%;
          width: 80px;
        }
        &:nth-child(2) {
          top: 5%;
          right: 15%;
          width: 130px;
        }
        &:nth-child(3) {
          bottom: 10%;
          right: 35%;
          width: 180px;
        }
        &:nth-child(4) {
          top: 42%;
          left: 5%;
          width: 120px;
          z-index: 3;
        }
      }
    }
  }
`
