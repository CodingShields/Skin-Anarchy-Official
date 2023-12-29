import { create } from "zustand";

const buttonState = {
  buttonState: false,
};

export const useButtonState = create((set, get) => ({
  ...buttonState,
  actions: {
    getButtonState: () => {
      const state = get();
      return {
        buttonState: state.buttonState,
      };
    },
    resetForm: () => set(buttonState),
    setButtonState: (bool) => set({ buttonState: bool }),
  },
}));

export const useButtonStateActions = () =>
  useButtonState((state) => state.actions);
