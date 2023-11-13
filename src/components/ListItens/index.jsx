import { useState, useEffect } from "react";
import { StyleList } from "./style-listItens";

const ListItens = ({ itens }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
        if (itens) {
            const response = await fetch(itens.repos_url);
            const data = await response.json();
            setRepos(data);
        }
        };

        fetchRepos();
    }, [itens]);

    if (!repos) {
        return null;
    }

    return (
        <StyleList>
            {repos.map((repo) => (
                <div key={repo.id}>
                    <hr />
                    <strong>{repo.name}</strong>
                    <p>{repo.description}</p>
                </div>
            ))}
        </StyleList>
    );
};

export default ListItens;