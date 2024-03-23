const { hashPassword } = require("../helpers/auth.helper");

const register = async (req, res) => {
    // res.send('Registration');
    const { username, password } = req.body;
    
    if (!email) {
        return res.json({
            error: "Email is required",
        });
    }
    
    if (!password || password.length < 6) {
        return res.json({
            error: "Password is required and should be 6 characters long",
        });
    }

    const existUser = await User.findOne({ username });

    if (existUser) {
        res.send('Username already exists');
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    const newUser = new User(req.body);
    await newUser.save();

    res.send('Register Successful');
}

const login = async (req, res) => {
    res.send('Login');
    // async (req, res) => {
    //     try {
    //         const user = await User.findOne({
    //             username: req.body.username,
    //             password: req.body.password
    //         });
    
    //         if (user) {
    //             res.send('Login Successful');
    //         }
    //     } catch (err) {
    //         res.status(400).json(err);
    //     }
    // }
}

module.exports = { register, login };

// try {
    //     const existUser = await User.findOne({ username });

    //     if (existUser) {
    //         res.send('Username already exists');
    //     }

    //     const newUser = new User(req.body);
    //     await newUser.save();

    //     res.send('Register Successful');
    // } catch (err) {
    //     res.status(400).json(err);
    // }

// export const signup = async (req, res) => {
//     try {
//       // validation
//       const { name, email, password } = req.body;
//       if (!name) {
//         return res.json({
//           error: "Name is required",
//         });
//       }
//       if (!email) {
//         return res.json({
//           error: "Email is required",
//         });
//       }
//       if (!password || password.length < 6) {
//         return res.json({
//           error: "Password is required and should be 6 characters long",
//         });
//       }
//       const exist = await User.findOne({ email });
//       if (exist) {
//         return res.json({
//           error: "Email is taken",
//         });
//       }
//       // hash password
//       const hashedPassword = await hashPassword(password);
  
//       try {
//         const user = await new User({
//           name,
//           email,
//           password: hashedPassword,
//         }).save();
  
//         // create signed token
//         const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
//           expiresIn: "7d",
//         });
  
//         console.log('user1', user);
//         const { password, ...rest } = user._doc;
//         return res.json({
//           token,
//           user: rest,
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };