import { create } from "zustand";

const currentNavState = {
	navBarActive: false,
};

export const useNavStore = create((set, get) => ({
	...currentNavState,
	actions: {
		getNavStore: () => {
			const state = get();
			return {
				navBarActive: state.navBarActive,
			};
		},
		resetForm: () => set(currentNavState),
		setNavBarActive: (bool) => set({ navBarActive: bool }),
	},
}));

export const useNavStoreActions = () => useNavStore((state) => state.actions);
