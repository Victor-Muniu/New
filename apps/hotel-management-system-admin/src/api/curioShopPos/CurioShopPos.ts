export type CurioShopPos = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemId: number | null;
  itemName: string | null;
  price: number | null;
  quantity: number | null;
  totalAmount: number | null;
};
