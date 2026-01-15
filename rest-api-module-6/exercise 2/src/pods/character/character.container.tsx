import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as api from "./api";
import { createEmptyCharacter, Character } from "./character.vm";
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from "./character.mappers";
import { CharacterComponent } from "./character.component";

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleCharacterCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };
  React.useEffect(() => {
    if (id) {
      handleCharacterCharacter();
    }
  }, [id]);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    try {
      await api.saveCharacter(apiCharacter);
      navigate(-1);
    } catch (error) {
      alert("Error on save character");
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
