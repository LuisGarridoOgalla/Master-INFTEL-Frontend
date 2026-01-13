import { Character } from './character.api-model';
import { Lookup } from '#common/models';
import axios from 'axios';
// import { mockCities, mockHotelCollection } from './hotel.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character/' + id);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};


// export const saveHotel = async (hotel: Character): Promise<boolean> => {
//   return true;
// };
