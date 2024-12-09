
const mySqlPool = require("../config/db");


// get all users
const getUsers = async (req,res) => {
  try{
    const data = await mySqlPool.query("SELECT * from users")
    if(!data || data[0].length==0){
      return res.status(404).send({
        success:false,
        message:"No users found",
      })
    }else{
      res.send(data[0]);
    }
  }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in GetAll Users API",
    })
  }
}

// create user

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).send({
        success: false,
        message: "All fields are required: username, password",
      });
    }

    // Check if the username already exists
    const [existingUser] = await mySqlPool.query("SELECT * FROM users WHERE username = ?", [username]);

    if (existingUser.length > 0) {
      return res.status(400).send({
        success: false,
        message: "Username already exists",
      });
    }

    // Insert user into the database if username doesn't exist
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    const [result] = await mySqlPool.query(query, [username, password]);

    // Respond with success
    res.status(201).send({
      success: true,
      message: "User created successfully",
      userId: result.insertId, // Return the ID of the newly created user
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({
      success: false,
      message: "Error in Create User API",
    });
  }
};


module.exports = {getUsers,createUser}