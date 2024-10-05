import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

// cloudinary.config({
//   cloud_name: "dxnzunrni",
//   api_key: "231797349687181",
//   api_secret: "Loyxcoox1A9w_CPCADXcQJ6SzxI",
// });

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    console.log("uplaoding file");
    const fileUploadResponse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("fileUploadResponse" + fileUploadResponse);
    fs.unlinkSync(localFilePath);

    return fileUploadResponse;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteOnCloudinary = async (FilePath) => {
  if (!FilePath) {
    return null;
  }

  const response = await cloudinary.uploader.destroy(FilePath);
  return response;
};

export { uploadOnCloudinary, deleteOnCloudinary };
