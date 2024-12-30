import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate

import PageContainer from "../components/PageContainer";

import Title from "../components/Form/Title";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

import * as api from "../services/api/games";

export default function Customer() {
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [pricePerDay, setPricePerDay] = useState(0);
    const [stockTotal, setStockTotal] = useState(0);
    const categoryId = 1;

    function submit(event) {
        event.preventDefault();

        api
            .create(name, image, stockTotal, categoryId, pricePerDay)
            .then(() => {
                navigate("/games"); // Use navigate instead of history.push
            })
            .catch((err) => {
                console.error(err);
                alert("Não foi possível criar jogo!");
            });
    }

    return (
        <PageContainer title={`Novo Jogo ${name.length ? "-" : ""} ${name}`}>
            <form onSubmit={submit}>
                <Title>Nome</Title>
                <Input value={name} onChange={(e) => setName(e.target.value)} />

                <Title>Imagem</Title>
                <Input value={image} onChange={(e) => setImage(e.target.value)} />

                <Title>Preço por Dia</Title>
                <Input
                    value={pricePerDay}
                    onChange={(e) => setPricePerDay(e.target.value)}
                    type="number"
                />

                <Title>Quantidade total do estoque</Title>
                <Input
                    value={stockTotal}
                    onChange={(e) => setStockTotal(e.target.value)}
                    type="number"
                />

                <Button>Salvar Jogo</Button>
            </form>
        </PageContainer>
    );
}