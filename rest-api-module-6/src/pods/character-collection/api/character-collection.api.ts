import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
// import { mockHotelCollection } from './hotel-collection.mock-data';

// let hotelCollection = [...mockHotelCollection];

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  // return null as unknown as CharacterEntityApi[];
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  // hotelCollection = hotelCollection.filter((h) => h.id !== id);
  return true;
};
