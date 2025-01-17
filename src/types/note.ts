export interface Note {
  id: number;
  userId: number;
  product: string;
  placeId: number;
  user?: string;
  place?: string;
  createdAt: string; // ISO date string
}
