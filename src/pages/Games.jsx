import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate

import PageContainer from "../components/PageContainer";
import Loading from "../components/Loading";
import Table from "../components/Table";

import Button from "../components/Form/Button";

import * as api from "../services/api/games";

export default function Customers() {
    const [games, setGames] = useState(null);

    const navigate = useNavigate(); // Replace useHistory with useNavigate

    useEffect(() => {
        api.list().then((games) => {
            setGames(games);
        });
    }, []);

    if (!games) return <Loading />;

    return (
        <PageContainer title="Jogos">
            <Table
                columns={[
                    { title: "Imagem", accessor: "image" },
                    { title: "Nome", accessor: "name" },
                    { title: "Preço por Dia", accessor: "pricePerDay" },
                ]}
                content={games}
                formatCellText={{
                    image: (image, row) => <img src={image} alt={`${row.name} board`} />,
                    pricePerDay: (price) =>
                        `R$ ${(price / 100).toFixed(2).replace(".", ",")}`,
                }}
            />

            <Button onClick={() => navigate("/games/new")}>Adicionar Jogo</Button> {/* Use navigate */}
        </PageContainer>
    );
}