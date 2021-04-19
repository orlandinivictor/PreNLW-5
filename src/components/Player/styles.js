import styled from 'styled-components';

import * as colors from '../../config/colors'

export const PlayerDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 30vw;
  height: 100vh;
  background: ${colors.darkPurple};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  color: white;

  h3 {
    margin-left: 1rem;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  width: 68.5%;
  height: 42%;
  background-image: linear-gradient(to left top, ${colors.darkPurple} 25%, ${colors.medPurple});
  border: dashed 3px rgba(255,255,255, 0.3);
  border-radius: 1rem;
  padding: 0 3rem;

  h3 {
    text-align: center;
    color: white;
    font-weight: 600;
  }
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255, 0.8);

  div {
    width: 39%;
    height: 0.5rem;
    margin: 1rem 1rem;
    background-color: ${colors.medPurple};
    border-radius: 2rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    padding: 1.2rem;
    margin: 0 0.1rem;
    border-radius: 1rem;
    color: rgba(255,255,255, 0.5);
    transition: all 500ms;

    &:hover {
      background-color: rgba(200,200,200, 0.2)
    }
  }
`;
