export interface IGenders {
  id: number;
  notation: string;
  description: string;
}

export const genders: IGenders[] = [
  {
    id: 1,
    notation: 'FM',
    description: 'Femenino'
  },
  {
    id: 2,
    notation: 'MS',
    description: 'Masculino'
  },
  {
    id: 3,
    notation: 'NN',
    description: 'Otro'
  }
]
