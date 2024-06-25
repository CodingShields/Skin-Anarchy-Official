import { create } from "zustand";

const currentImageStore = {
	loadingData: false,
	previewLargeImage: false,
	fontColor: "#ffffff",
	fontSize: 24,
	fontFamily: "arial",
	fontStyle: "normal",
	fontWeight: "normal",
	fontLetterSpacing: "tracking-normal",
	gridAlign: false,
	productImage: { x: 0, y: 0 },
	awardImage: { x: 0, y: 0 },
	brandLogoImage: { x: 0, y: 0 },
	yearText: { x: 0, y: 0 },
	imageToAdjust: "awardImage",
	selectedAwardTemplate: "",
	selectedBackgroundTemplate: "",
};

export const useImageStore = create((set, get) => ({
	...currentImageStore,
	actions: {
		getImageStore: () => {
			const state = get();
			return {
				loadingData: state.loadingData,
				previewLargeImage: state.previewLargeImage,
				fontColor: state.fontColor,
				fontSize: state.fontSize,
				fontFamily: state.fontFamily,
				fontStyle: state.fontStyle,
				fontWeight: state.fontWeight,
				fontLetterSpacing: state.fontLetterSpacing,
				gridAlign: state.grid,
				productImage: state.productImage,
				awardImage: state.awardImage,
				brandLogoImage: state.brandLogoImage,
				yearText: state.yearText,
				imageToAdjust: state.imageToAdjust,
				selectedAwardTemplate: state.selectedAwardTemplate,
				selectedBackgroundTemplate: state.selectedBackgroundTemplate,
			};
		},
		resetForm: () => set(currentImageStore),
		setLoadingData: (bool) => set({ loadingData: bool }),
		setPreviewLargeImage: (bool) => set({ previewLargeImage: bool }),
		setFontColor: (str) => set({ fontColor: str }),
		setFontSize: (str) => set({ fontSize: str }),
		setFontFamily: (str) => set({ fontFamily: str }),
		setFontStyle: (str) => set({ fontStyle: str }),
		setFontWeight: (str) => set({ fontWeight: str }),
		setFontLetterSpacing: (str) => set({ fontLetterSpacing: str }),
		setGridAlign: (bool) => set({ gridAlign: bool }),
		setProductImage: (obj) => set({ productImage: obj }),
		setAwardImage: (obj) => set({ awardImage: obj }),
		setBrandLogoImage: (obj) => set({ brandLogoImage: obj }),
		setYearText: (obj) => set({ yearText: obj }),
		setImageToAdjust: (str) => set({ imageToAdjust: str }),
		setSelectedAwardTemplate: (str) => set({ selectedAwardTemplate: str }),
		setSelectedBackgroundTemplate: (str) => set({ selectedBackgroundTemplate: str }),
	},
}));

export const useImageStoreActions = () => useImageStore((state) => state.actions);
