export type Pokemon = {
  id: string;
  name: string;
  number?: string;
  types?: string[];
  image?: string;
  classification?: string;
  resistant?: string[];
  weaknesses?: string[];
  fleeRate?: number;
  maxCP?: number;
  maxHP?: number;
  weight?: {
    minimum: string;
    maximum: string;
  };
  height?: {
    minimum: string;
    maximum: string;
  };
};
