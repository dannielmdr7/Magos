export interface ApiResponse {
  name: string;
  yearOfBirth: number | string;
  patronus: Patronus;
  actor: string;
  image: string;
}

export enum Patronus {
  Boar = 'boar',
  Empty = '',
  Hare = 'hare',
  Horse = 'horse',
  JackRussellTerrier = 'Jack Russell terrier',
  Otter = 'otter',
  Stag = 'stag',
  Swan = 'swan',
}
