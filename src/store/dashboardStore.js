import create from "zustand";

export const dashboardStore = create((set) => ({
    randomNums: [],
    getRandomNum: () => {
  
        set({ randomNums: [Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]})
    }
}))