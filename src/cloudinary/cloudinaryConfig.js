import { v2 as cloudinary } from "cloudinary";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
const apiEnvironmentVariable = import.meta.env.VITE_CLOUDINARY_API_ENVIRONMENT_VARIABLE;

const cloudinaryConfig = cloudinary.config({
	cloud_name: cloudName,
	uploadPreset: "skinAnarchyBGRemoval",
	api_key: apiKey,
	api_secret: apiSecret,
	api_environment_variable: apiEnvironmentVariable,
});

export default cloudinaryConfig;
