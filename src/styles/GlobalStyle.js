import { createGlobalStyle } from 'styled-components';

import { backgroundGrey, lightPurple } from '../config/colors'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 20rem;
          background: ${lightPurple};
        }
    }

    body, html {
        height: 100%;
    }

    body {
        font-family: 'Lexend', sans-serif;
        background: ${backgroundGrey};
    }
`;
