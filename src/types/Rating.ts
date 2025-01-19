interface Rating {
  id?: string;
  cookie: string;
  place: string;
  flavor: number;  // Changed from taste
  look: number;    // Changed from appearance
  texture: number;
  createdAt: Date;
}

export type { Rating };
