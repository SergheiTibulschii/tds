import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body {
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }

    button {
        margin: 0;
    }

    .b {
        border: 1px solid gray;
        border-radius: 5px;
        border-style: dashed;
    }

    #app {
        height: 100%;
    }
`