export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: {
    latitude: number;
    longitude: number;
  };
  image: string;
  episodes: string[];
  url: string;
  created: string
}
