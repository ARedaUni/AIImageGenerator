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
  res.status(200).send();
});

exports.deleteAlbumImage = asyncHandler(async(req,res) => {
  res.status(200).send();
});

exports.getAlbumImages = asyncHandler(async(req,res) => {
  res.status(200).send();
})