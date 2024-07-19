export type Rate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  roomType: string | null;
  price: number | null;
  season?: "Option1" | null;
};
