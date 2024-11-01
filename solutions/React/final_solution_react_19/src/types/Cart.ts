import { Seat } from "./Seat";
import { Showing } from "./Showing";

export type Cart = CartItem[];

export type CartItem = {
  seat: Seat;
  showing: Showing;
}

