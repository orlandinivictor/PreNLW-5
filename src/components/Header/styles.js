import styled from 'styled-components';

import * as colors from '../../config/colors';

export const HeaderBox = styled.div`
  width: 70vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.lightGrey};
  background: white;
  padding: 0 3rem;
  color: ${colors.medGrey};
  font-size: .9rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
      img {
        width: 40px;
        margin: 1rem;
      }

      h2 {
        color: ${colors.darkGrey};
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 1px;
      }
    }

    span {
      margin: 2rem;
      color: ${colors.lightGrey};
    }
  }

`;
