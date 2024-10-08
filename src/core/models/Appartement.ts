import {Residence} from "./Residence";

export interface Appartement {
  id: number;
  appartNum: number;
  floorNum: number;
  surface: number;
  terrace: string;
  surfaceTerrace: number;
  category: string;
  description: string;
  residence: Residence;
  isFavorite: boolean; // Add this property
}
