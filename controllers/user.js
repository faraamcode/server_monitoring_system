const pool = require("../db")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
exports.userSignup = async(req, res, next)=>{

  const {email, password} = req.body;
  if (email.length > 0 && password.length > 3 && email.includes("@")) {
   const checkUser = await pool.query("SELECT * FROM users WHERE email=$1 ", [email])
   if (checkUser.rowCount === 0) {
       const hash = await bcrypt.hash(password, 0)
       const user = {email, hash}
       const users = await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hash])
       jwt.sign({user}, "server-monitor", (err, token)=>{
          res.status(200).json({session: token})
     
        })
   }else{
    return res.status(400).json({error: "User already exists"})
   }
   
 }else{
    return res.status(401).json({error: "enter valid details"})
 }
 
}
exports.userLogin = async(req, res, next)=>{
 const {email, password} = req.body
// check for empty password or email or not orignal email

 // checking the user existence on the database
 const users = await pool.query("SELECT * FROM users WHERE email=$1 ", [email])
 if (users.rowCount < 1) {
      res.status(400).json({error: "user does not exist"})
 }else{

  // checking the validity of the user password
     const hashedPassword= users.rows[0].password
     const checkPassword = await bcrypt.compare(password, hashedPassword)
      if (checkPassword) {
          const login = {email, hashedPassword}
          jwt.sign({login}, "server-monitor", (err, token)=>{
          res.status(200).json({session: token})
    
         })
  
      }else{
          res.status(400).json({error : "invalid password"})
      }
 }
}