import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500&display=swap');
    *, html, body{
        width: 100%;
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        text-decoration:none;
        color:whitesmoke;
        background-color:#102128;
        font-family: 'Dosis', sans-serif;
    }
`;