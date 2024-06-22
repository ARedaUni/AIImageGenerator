const supabase = require("../config/supabase");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.signUp = asyncHandler(async (req, res) => {
  try {
    const { email, password, name, avatar_url, username } = req.body;
    if (!email || !password || !username) {
      res.status(400);
      throw new Error("All fields are mandatroy");
    }
    //hash password

    const hashedPassword = await bcrypt.hash(password, 10);
    const { data, error } = await supabase.rpc("add_a_user", {
      email,
      password: hashedPassword,
      username,
      name,
      avatar_url,
    });
    if (error) throw new Error(JSON.stringify(error, null, 2));
    res.status(201).send({ data });
  } catch (e) {
    console.log(e);
  }
});
// hashedjwfsdfsft

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const { data, error } = await supabase.rpc("login", { p_email: email });
  if (error) throw new Error(JSON.stringify(error, null, 2));
  if (data && bcrypt.compare(password, data.password)) {
    const accessToken = jwt.sign(
      {
        user: {
          id: data.id,
          email: data.email,
          password: data.password,
          name: data.name,
          username: data.username,
          avatar_url: data.avatar_url,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "3600m" }
    );
    res.status(200).json({accessToken})
  } else {
    res.status(401);
    throw new Error("Wrong email or password");
  }
});

exports.accessAlbum = asyncHandler(async(req,res) => {
    console.log("done")
})