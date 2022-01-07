import styled from "styled-components"

export const ContainerHome = styled.section`
  position: relative;
  margin: 5% auto;
  max-width: 1024px;
  max-height: 800px;
  padding: 30px 100px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 24px;

  @media (max-width: 1080px) {
    margin: 3%;
  }
  @media (max-width: 768px) {
    padding: 30px 40px;
  }

  @media (max-width: 414px) {
    padding: 30px 20px;
  }
`
export const ContentHome = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: start;

  p {
    letter-spacing: 0.05em;
    max-width: 400px;
    line-height: 1.2em;
  }

  button {
    display: block;
    margin: 30px 0 5px 0;
    padding: 14px 24px;
    width: auto;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
    transition: 0.6s;
    z-index: 2;

    &:hover {
      transform: scale(1.02);
    }
  }

  div {
    display: inline-flex;

    &:nth-child(2) {
      position: relative;

      h2 {
        letter-spacing: 0.1em;
        z-index: 2;
        @media (max-width: 768px) {
          letter-spacing: 0em;
        }
      }

      span {
        position: absolute;
        bottom: 0;
        right: 0px;
        z-index: 4;
        letter-spacing: 0.1em;

        @media (max-width: 768px) {
          letter-spacing: 0em;
          right: 40px;
          z-index: 1;
        }
      }
    }

    &:last-child {
      align-items: center;
      gap: 5px;

      img {
        width: 40px;
      }
    }
  }

  img {
    width: 100px;
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

        @media (max-width: 414px) {
          top: 12%;
          width: 40px;
        }
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
          top: 44%;
          left: 5%;
          width: 100px;
          z-index: 3;
        }

        @media (max-width: 825px) {
          &:nth-child(4) {
            display: none;
          }
        }
        @media (max-width: 768px) {
          z-index: 1;
          &:nth-child(2) {
            display: none;
          }

          &:nth-child(3) {
            bottom: 10%;
            right: 20%;
            width: 130px;
          }
        }
        @media (max-width: 414px) {
          &:first-child {
            top: 10%;
            right: 20%;
            width: 80px;
          }

          &:nth-child(3) {
            bottom: 10%;
            right: 10%;
            width: 100px;
          }
        }
      }
    }
  }
`
