import { useNavigate } from "react-router-dom"; // Update to useNavigate
import styled from "styled-components";
import { FaHistory, FaChessBoard, FaGamepad } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

import logo from "../assets/images/logo.png";

export default function Sidebar() {
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    return (
        <Container collapsed>
            <Logo>
                <img src={logo} alt="BoardCamp Logo" />
            </Logo>

            <MenuItem onClick={() => navigate("/rentals")}> {/* Update to navigate */}
                <FaHistory />
                Aluguéis
            </MenuItem>

            <MenuItem onClick={() => navigate("/customers")}> {/* Update to navigate */}
                <BsFillPeopleFill />
                Clientes
            </MenuItem>

            <MenuItem onClick={() => navigate("/games")}> {/* Update to navigate */}
                <FaChessBoard />
                Jogos
            </MenuItem>
        </Container>
    );
}

const Container = styled.aside`
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;

    width: var(--sidebar-width);
    background-color: var(--colors-main);
    color: #fff;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;

    position: sticky;
    top: 0;
    z-index: 2;
`;

const Logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const MenuItem = styled.button`
    cursor: pointer;
    border-radius: 4px;
    width: 252px;
    border: none;
    padding: 16px 16px 16px 45px;
    margin-top: 10px;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 1.1em;

    word-break: break-all;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

    svg {
        position: absolute;
        left: 16px;
    }
`;