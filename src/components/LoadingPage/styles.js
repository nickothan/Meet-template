import styled, { keyframes } from "styled-components"

const animate1 = keyframes`
0%{
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
  
}
`
const animate2 = keyframes`
0%{
  transform: rotate(360deg);
}
100% {
  transform: rotate(0deg);
  
}
`

export const ContainerLoading = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  transition: 1.2s;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      position: relative;
      display: block;
      margin: -30px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 4px solid transparent;
      border-top: 4px solid ${({ theme }) => theme.colors.primary};
      animation: ${animate1} 4s linear infinite;

      &::before {
        content: "";
        position: absolute;
        top: 12px;
        right: 12px;
        width: 15px;
        height: 15px;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        box-shadow: 0 0 0 5px #32f5c833, 0 0 0 10px #32f5c822,
          0 0 0 20px #32f5c811;
      }

      &:nth-child(2) {
        border-top: 4px solid transparent;
        border-left: 4px solid ${({ theme }) => theme.colors.second};
        animation: ${animate2} 4s linear infinite;
        animation-delay: -1s;

        &::before {
          content: "";
          position: absolute;
          top: initial;
          bottom: 12px;
          left: 12px;
          width: 15px;
          height: 15px;
          background-color: ${({ theme }) => theme.colors.second};
          border-radius: 50%;
          box-shadow: 0 0 0 5px #00acee33, 0 0 0 10px #00acee22,
            0 0 0 20px #00acee11;
        }
      }

      &:nth-child(3) {
        position: absolute;
        top: -66.66px;
        border-top: 4px solid transparent;
        border-left: 4px solid ${({ theme }) => theme.colors.text};
        animation: ${animate2} 4s linear infinite;
        animation-delay: -3s;

        &::before {
          content: "";
          position: absolute;
          top: initial;
          bottom: 12px;
          left: 12px;
          width: 15px;
          height: 15px;
          background-color: ${({ theme }) => theme.colors.text};
          border-radius: 50%;
          box-shadow: 0 0 0 5px #97adb733, 0 0 0 10px #97adb722,
            0 0 0 20px #97adb711;
        }
      }
    }
  }

  p {
    margin-top: 50px;
    font-size: 30px;
    letter-spacing: 0.1em;
  }
`
