import multer from "multer";

import { upload } from "../config/multer.mjs";
import { fileToBase64 } from "../utils/utils.mjs";

const uploadController = {};

let image;

uploadController.uploadFile = async (req, res) => {

    try {
        upload.single("file")(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred
                console.error("Multer error:", err);
                return res.status(400).json("Error uploading file.");
            } else if (err) {
                // An unknown error occurred
                console.error("Unknown error:", err);
                return res.status(500).json("Server error.");
            }
            
            // File uploaded successfully, you can access it using req.file
            console.log("File uploaded:", req.file);

            const base64Data = await fileToBase64(req.file.path);

            image = base64Data;

            res.status(201).json("Uploaded file");
        });
    } catch (e) {
        console.error("Error:", e);
        res.status(500).json("Something went wrong.");
    }
}

uploadController.downloadFile = upload.single("file"), async (req, res) => {
    try {
        const base64String = req.body.base64Image;

        // Convert base64 to file
        const filePath = convertBase64ToFile(base64String, 'uploads/image.png');

        // Read the file from the file system
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return res.status(500).json("Error reading file");
            }

            // Set the content type header
            res.set("Content-Type", "image/*");

            // Send the file as the response
            res.send(data);
    })

    } catch (e) {
        res.status(500).json("Something went wrong.")
    }
}

uploadController.downloadFileZero = async (req, res) => {
    try {
        const buffer = Buffer.from(image, "base64")

        res.set("Content-Type", "image/*")

        res.send(buffer)

    } catch (e) {
        res.status(500).json("Something went wrong.")
    }
}

export default uploadController;