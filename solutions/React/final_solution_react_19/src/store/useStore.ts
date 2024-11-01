
import { create } from "zustand";
import { Film } from "../types/Film";
// import { Reservation } from "../types/Reservation";
import { Showing } from "../types/Showing";
// import { Theater } from "../types/Theater";
// import { User } from "../types/User";
import { Cart, CartItem } from "../types/Cart";
import { Theater } from "../types/Theater";
import { User } from "../types/User";

export type State = {
  // The shopping cart
  cart: Cart,
  addToCart: (cartItem: CartItem) => void,
  removeFromCart: (cartItem: CartItem) => void,
  // The date for which we're searching films (not "now")
  currentDate: Date,
  setCurrentDate: (date: Date) => void,
  // The list of all films
  films: Film[],
  setFilms: (films: Film[]) => void,
  // 
  // reservations: Reservation[],
  // All showings: a film in a theater at a given time
  showings: Showing[],
  setShowings: (showings: Showing[]) => void,
  // All six theaters
  theaters: Theater[],
  setTheaters: (theaters: Theater[]) => void,
  // The current user
  user: User | undefined,
  setUser: (user: User) => void,
  logout: () => void,
}
export const useStore = create<State>((set) => ({
  //
  cart: [],
  addToCart: (cartItem: CartItem) => set((state) => { console.log({ cartItem, state }); return { ...state, cart: [...state.cart, cartItem] } }),
  removeFromCart: (cartItem: CartItem) => set((state) => ({ ...state, cart: [...state.cart.filter(c => c.seat !== cartItem.seat)] })),
  //
  currentDate: new Date(new Date().setHours(0, 0, 0, 0)),
  setCurrentDate: (date: Date) => set((state) => ({ ...state, currentDate: date })),
  //   
  films: [],
  setFilms: (films: Film[]) => set((state) => ({ ...state, films: films })),
  //   reservations: [],
  //   
  showings: [],
  setShowings: (showings: Showing[]) => set((state) => ({ ...state, showings: showings })),
  //   
  theaters: [],
  setTheaters: (theaters) => set((state) => ({ ...state, theaters: theaters })),
  //   
  user: undefined,
  setUser: (user: User) => set((state) => ({ ...state, user: user })),
  logout: () => set((state) => ({ ...state, user: undefined })),
}));