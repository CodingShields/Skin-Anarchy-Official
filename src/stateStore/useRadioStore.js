import { create } from "zustand";

const currentRadioState = {
    openRadioOn: false,
    playing: false,
};

export const useRadioStore = create((set, get) => ({
	...currentRadioState,
	actions: {
		getRadioStore: () => {
			const state = get();
            return {
                episode: state.episode,
                openRadioOn: state.openRadioOn,
                playing: state.playing,
			};
		},
        resetRadio: () => set(currentRadioState),
        setOpenRadioOn: (bool) => set({ openRadioOn: bool }),
        setPlaying: (bool) => set({ playing: bool }),
	},
}));

export const useRadioStoreActions = () => useRadioStore((state) => state.actions);
