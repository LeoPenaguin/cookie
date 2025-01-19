interface Rating {
  id?: string;
  product: string;
  place: string;
  flavor: number;
  look: number;
  texture: number;
  createdAt: Date;
  userId: string;
  userName: string;
}

export type { Rating };
