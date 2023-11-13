import { ContentInput } from "./style-Inputs";

import { useState } from "react";

const Inputs = ({setInfoData}) => {

    const [user, setUser] = useState()

    const handlerGetData = async () => {
        const URL = `https://api.github.com/users/${user}`;
        const userData = await fetch(URL);
        const newUser = await userData.json();

        setInfoData(newUser);
    };

    return (
        <ContentInput>
            <input 
                type="text" 
                placeholder="  @nameuser" 
                value={user}
                onChange={event => setUser(event.target.value)}
            />
            <button onClick={handlerGetData} >Buscar</button>
        </ContentInput>
    );
};

export default Inputs;