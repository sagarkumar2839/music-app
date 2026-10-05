import {v2 as cloudinary} from 'cloudinary';
import albumModel from '../models/albumModel.js';

const addAlbum = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.files.image[0];
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        }
        const album = albumModel(albumData);
        await album.save();
        res.status(201).json({ message: "Album added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const listAlbums = async (req, res) => {
    try {
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
} 

const removeAlbum = async (req, res) => {
    try {
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export {addAlbum, listAlbums, removeAlbum};