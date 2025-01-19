interface Friendship {
  id?: string;
  userId: string;
  friendId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export type { Friendship };
