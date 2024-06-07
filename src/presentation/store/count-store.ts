import { create } from "zustand";


export interface CounterState {
    count: number;

    incrementBy: (value: number) => void;
}


export const useCountStore = create<CounterState>()((set, get) => ({
    count: 0,

    // set( state => ({ count: state.count + value }));

    incrementBy: (value) => set({ count: get().count + value }),
}))