
export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episodes: string[];
  url: string;
  created: string
}

export const createEmptyHotel = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  episodes: [],
  url: '',
  created: ''
});
