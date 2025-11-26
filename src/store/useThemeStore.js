import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Product_Listing_Theme") || "light",
  setTheme: (theme) => {
    localStorage.setItem("Product_Listing_Theme", theme);
    set({ theme });
  },
}));
