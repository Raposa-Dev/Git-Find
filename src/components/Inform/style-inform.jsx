import styled from "styled-components";

export const Inform = styled.div`
    width:80%;
    height: 150px;
    display: flex;
    & img {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        border: 4px solid black;
    };
`;

export const Bio = styled.div`
    display: flex;
    padding-left: 50px;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
    height:100%;
    color: black;
    & h2, p {
        background-color:none;
    }
`;