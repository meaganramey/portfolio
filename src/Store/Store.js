import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    updateBackground: (location) => {
      if (location === "aboutMe") {
        set({ background: "aboutMe" });
      } else if (location === "resume") {
        set({ background: "resume" });
      } else if (location === 'gallery') {
        set({ background: "gallery" })
      }
      else {
        set({ background: "home" });
      }
    },
    background: "",
  }))
);

export default useStore;
