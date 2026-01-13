import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
  episodes: character.episodes,
  url: character.url,
  created: character.created,
});

export const mapCharacterFromVmToApi = (hotel: viewModel.Character): apiModel.Character =>
(({
  ...hotel,
  id: hotel.id,
  name: hotel.name,
  status: hotel.status,
  species: hotel.species,
  type: hotel.type,
  gender: hotel.gender,
  image: hotel.image,
  episodes: hotel.episodes,
  url: hotel.url,
  created: hotel.created,
} as unknown) as apiModel.Character);
