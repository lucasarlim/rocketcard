import React, { useContext, useState } from "react";
import Button from "../../components/Button";
import InputSearch from "../../components/InputSearch";
import ProfileCard from "../../components/ProfileCard";
import { UserContext } from "../../context/UserContext";
import api from "../../service/api";

import { Container, CustomCardContent, InputWrapper } from "./styles";

export const Home: React.FC = () => {
  const [userSearch, setUserSearch] = useState("");
  const context = useContext(UserContext);

  async function getUserData() {
    try {
      const reponse = await api.get(userSearch);
      context.setUserData(reponse.data);
    } catch (err) {
      alert("Username inválido. Por favor, tente novamente.");
    }
  }

  return (
    <Container>
      <ProfileCard />
      <CustomCardContent>
        <InputWrapper>
          <label>Github Profile</label>
          <InputSearch
            type="text"
            value={userSearch}
            placeholder="Digite"
            onChange={(e) => setUserSearch(e.target.value)}
          />
        </InputWrapper>
        <Button onClick={getUserData}>Pesquise</Button>

        <p>Compartilhe seu #rocketcard</p>
      </CustomCardContent>

      <div className="bubble-left" />
      <div className="bubble-right" />
    </Container>
  );
};
