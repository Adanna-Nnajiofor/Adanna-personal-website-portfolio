import axios from "axios";

export const uploadImageToCloudinary = async (
  file: File
): Promise<string | null> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_ARCH || ""
  );
  formData.append(
    "cloud_name",
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ""
  );

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );

    return response.data.secure_url; // Cloudinary image URL
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};
