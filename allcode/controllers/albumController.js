const supabase = require("../config/supabase");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.accessAlbum = asyncHandler(async (req, res) => {
  const { id, username, email } = req.user;
  const { data, error } = await supabase.rpc("grab_album", { userid: id });
  if (data) res.status(200).json(data);
  else res.status(401).send(error);
});

exports.createAlbum = asyncHandler(async(req,res) => {
    const {userid, albumname, albumCover} = req.body;
    console.log(userid, albumCover, albumname)
    const {data, error} = await supabase.rpc("create_album", {albumname, userid, albumcover:albumCover});
   console.log(data, error)
    if(data) res.status(201).json(data);
    else res.status(401).send(error);
})

exports.deleteAlbum = asyncHandler(async(req,res) => {
    const {userid, albumid} = req.body;
    const {data, error} = await supabase.rpc("delete_album", {userid, albumid});
   console.log(data, error)
   if (error === null) {
    return res.status(204).json({ message: "Album deleted successfully" });
  } else {
    console.error(error); // Log the error for debugging purposes
    return res.status(400).json({ message: "Failed to delete album" });
  }
})

exports.createAlbumImage = asyncHandler(async(req,res) => {
  const albumid = req.params.id;
  const {name, description} = req.body;
  const {data, error} = await supabase.rpc('createalbumimages', {name, description, albumid});
  if (data) res.status(200).send(data);
  else res.status(400).json(error)
});

exports.deleteAlbumImage = asyncHandler(async(req,res) => {
  const {imageid} = req.body;
  console.log(imageid)
  const {data, error} = await supabase.rpc('deletealbumimages', {imageid});
  console.log(data,error);
  if(data) if(data.id) res.status(200).send('Album Deleted Successfully');  else res.status(400).send('ImageID provided does not exist.');
 
});

exports.getAlbumImages = asyncHandler(async(req,res) => {
  const {data, error} = await supabase.rpc('grabalbumimages', {albumid:req.params.id, name:'firstImage', description:'image description to be userd'})
  if (data) res.status(200).send(data);
  else res.status(400).json(error)
})