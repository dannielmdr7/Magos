export interface House {
  name: string;
  alternate_names: string[];
  species: Species;
  gender: Gender;
  house: HouseEnum;
  dateOfBirth: DateOfBirth;
  yearOfBirth: number | string;
  wizard: boolean;
  ancestry: Ancestry;
  eyeColour: EyeColour;
  hairColour: HairColour;
  wand: Wand;
  patronus: Patronus;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export enum Ancestry {
  Empty = '',
  HalfBlood = 'half-blood',
  PureBlood = 'pure-blood',
}

export enum DateOfBirth {
  Empty = '',
  The05061980 = '05-06-1980',
  The09011960 = '09-01-1960',
  The31121926 = '31-12-1926',
}

export enum EyeColour {
  Black = 'black',
  Brown = 'brown',
  Empty = '',
  Green = 'green',
  Grey = 'grey',
  Red = 'red',
}

export enum Gender {
  Female = 'female',
  Male = 'male',
}

export enum HairColour {
  Bald = 'bald',
  Black = 'black',
  Blonde = 'blonde',
  Brown = 'brown',
  Empty = '',
  Grey = 'grey',
}

export enum HouseEnum {
  Slytherin = 'Slytherin',
}

export enum Patronus {
  Doe = 'doe',
  Empty = '',
  PersianCat = 'persian cat',
}

export enum Species {
  Ghost = 'ghost',
  Human = 'human',
}

export interface Wand {
  wood: string;
  core: Core;
  length: number | string;
}

export enum Core {
  DragonHeartstring = 'dragon heartstring',
  Empty = '',
  PhoenixFeather = 'phoenix feather',
  UnicornTailHair = 'unicorn tail-hair',
}
