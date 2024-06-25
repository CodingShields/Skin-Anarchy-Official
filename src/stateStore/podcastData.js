import { create } from "zustand";

const podCastStateData = {
  episodeData:
    [
      {
        id: "",
        date: "",
        artist: "The Beatles",
        title: "",
        audioUrl: "",
        artWorkUrl: "",
        description: "",
        duration: "",
        totalPlays: "",
        tags: "",
      },
    ]
};

export const usePodCastStateData = create((set, get) => ({
  ...podCastStateData,
  actions: {
    getPodCastStateData: () => {
      const state = get();
      return {
        episodeData: state.episodeData,
        id: state.id,
        date: state.date,
        artist: state.artist,
        title: state.title,
        audioUrl: state.audioUrl,
        artWorkUrl: state.artWorkUrl,
        description: state.description,
        duration: state.duration,
        totalPlays: state.totalPlays,
        tags: state.tags,
      };
    },
    resetForm: () => set(podCastStateData),
    setEpisodeData: (str) => set({ episodeData: str }),
    setId: (str) => set({ id: str }),
    setDate: (str) => set({ date: str }),
    setArtist: (str) => set({ artist: str }),
    setTitle: (str) => set({ title: str }),
    setAudioUrl: (str) => set({ audioUrl: str }),
    setArtWorkUrl: (str) => set({ artWorkUrl: str }),
    setDescription: (str) => set({ description: str }),
    setDuration: (str) => set({ duration: str }),
    setTotalPlays: (str) => set({ totalPlays: str }),
    setTags: (str) => set({ tags: str }),
  },
}));

export const usePodCastStateDataActions = () =>
  usePodCastStateData((state) => state.actions);
