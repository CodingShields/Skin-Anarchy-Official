import { create } from "zustand";

const currentUserState = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	userId: "",
};

export const useUserStore = create((set, get) => ({
	...currentUserState,
	actions: {
		getUserStore: () => {
			const state = get();
			return {
				firstName: state.firstName,
				lastName: state.lastName,
				email: state.email,
				phone: state.phone,
				membership: state.membership,
				userId: state.userId,
			};
		},
		resetForm: () => set(currentUserState),
		setFirstName: (str) => set({ firstName: str }),
		setLastName: (str) => set({ lastName: str }),
		setEmail: (str) => set({ email: str }),
		setPhone: (str) => set({ phone: str }),
		setUserId: (str) => set({ userId: str }),
	},
}));

export const useUserStoreActions = () => useUserStore((state) => state.actions);
