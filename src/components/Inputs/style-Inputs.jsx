import styled from "styled-components";

export const ContentInput = styled.div`
    width:100%;
    height:100px;
    display: flex;
    justify-content: center;
    align-items:center;

    & input {
        width:40%;
        height: 30px;
        border-radius: 1rem;
        border:none;
        color: black;
        background-color: whitesmoke;
        margin-right: 10px;
        padding-left: 15px;
    };

    & button {
        border: none;
        width: 100px;
        height: 30px;
        border-radius: 1rem;
        background-color: green;
    }
`;