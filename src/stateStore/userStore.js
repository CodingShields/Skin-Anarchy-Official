import { create } from "zustand";

const currentUserState = {
	firstName: "",
	lastName: "",
	email: "",
	confirmEmail: "",
	birthday: "",
	phone: "",
	userId: "",
	password: "",
	confirmPassword: "",
	podcastNotification: false,
	upComingNotifications: false,
	blogNotification: false,
	weeklyNewsletterNotification: false,
	admin: false,
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
				confirmEmail: state.confirmEmail,
				password: state.password,
				confirmPassword: state.confirmPassword,
				birthday: state.birthday,
				phone: state.phone,
				membership: state.membership,
				userId: state.userId,
				podcastNotification: state.podcastNotification,
				upComingNotifications: state.upComingNotifications,
				blogNotification: state.blogNotification,
				weeklyNewsletterNotification: state.weeklyNewsletterNotification,
				admin: state.admin,
			};
		},
		resetForm: () => set(currentUserState),
		setFirstName: (str) => set({ firstName: str }),
		setLastName: (str) => set({ lastName: str }),
		setEmail: (str) => set({ email: str }),
		setConfirmEmail: (str) => set({ confirmEmail: str }),
		setPassword: (str) => set({ password: str }),
		setConfirmPassword: (str) => set({ confirmPassword: str }),
		setBirthday: (str) => set({ birthday: str }),
		setPhone: (str) => set({ phone: str }),
		setUserId: (str) => set({ userId: str }),
		setPodcastNotification: (bool) => set({ podcastNotification: bool }),
		setUpComingNotifications: (bool) => set({ upComingNotifications: bool }),
		setBlogNotification: (bool) => set({ blogNotification: bool }),
		setWeeklyNewsletterNotification: (bool) => set({ weeklyNewsletterNotification: bool }),
		setAdmin: (bool) => set({ admin: bool }),

	},
}));

export const useUserStoreActions = () => useUserStore((state) => state.actions);
