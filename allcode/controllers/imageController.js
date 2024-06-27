const asyncHandler = require('express-async-handler');
const cloudinary = require('cloudinary').v2;
//import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dr1p8zyu8', 
    api_key: '123533178486571', 
    api_secret: 'HOl_BONX9EMAhjAB8EtiA0iOrUM'
});

exports.generateImage = async (req, res) => {
    try {
        const uploadResult = await cloudinary.uploader.upload(
            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
                public_id: 'shoes'
            }
        );
        res.status(200).send(uploadResult); 
    } catch (error) {
        console.error("Error during upload:", error);
        res.status(500).send({ error: "Upload failed" });
    }
};


























