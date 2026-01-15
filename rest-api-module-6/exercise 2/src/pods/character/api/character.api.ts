import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await axios.get(`http://localhost:3000/api/character/${id}`);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};


export const saveCharacter = async (character: Character): Promise<boolean> => {
  try {
    return axios.put(`http://localhost:3000/api/character/${character.id}`, character).then(() => true);
  } catch (err) {
    return Promise.reject(err);
  }
};
