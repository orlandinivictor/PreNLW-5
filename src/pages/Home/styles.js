import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Container = styled.div`
  margin: 3rem 4rem 0rem;
  width: 60.5vw;
  height: 77vh;
  overflow: auto;
`;

export const New = styled.div`
  color: ${colors.darkGrey};

  h2 {
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 1rem 1rem 1rem 0rem;
  }
`;

export const Card = styled.div`
  background-color: white;
  width: 29vw;
  height: 8rem;
  border: 1px solid #ddd;
  border-radius: 1.5rem;
  padding: 1rem 0rem 1rem 1rem;

  img {
    background: black;
    width: 6rem;
    height: 6rem;
    border-radius: 1.5rem;
  }

  div{
    display: flex;
    flex-direction: column;
    margin-left: .5rem;

    p {
      width: 16rem;
      margin-top: 1rem;
      font-size: .97rem;
      font-weight: 600;
    }

    div {
      width: 15.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;

      span {
        width: 12.5rem;
        line-height: 1.5rem;
        font-size: .8rem;
        font-weight: 400;
        color: ${colors.medGrey};

        div {
          margin: 0;
        }
      }

      button {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: .5rem;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.green};
      }
    }

  }
`;

export const All = styled.div`
  h2 {
    color: ${colors.darkGrey};
    margin-top: 2rem;
    font-weight: 600;
  }

  table {
    margin-top: 2rem;
    width: 100%;
    color: ${colors.medGrey};

    th {
      text-align: left;
      font-weight: 400;
      font-size: .7rem;
      padding: 0rem 0rem .5rem 0rem;
    }

    td {
      align-items: center;
      padding: .5rem 0rem 0rem;
      border-top: 1px solid #eee;
      vertical-align: middle;
      font-size: .94rem;
      span {
        color: ${colors.darkGrey};
        font-weight: 600;
      }
    }

    td:first-of-type {
      width: 3.5rem;
    }

    button {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: .5rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.green};
      }
  }
`;
