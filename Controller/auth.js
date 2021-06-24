//Middleware to protect the route /view 
const auth = function(req,res,next){
    //getting token from cookies
    const token = req.cookies.authToken;
    if(!token){
      console.log("Token not present please login!");
      res.redirect("/");
      return;
    }
    try {
      const verified = jwt.verify(token, process.env.SECRET);
      req.user = verified;
      User.findOne({username : req.user.username},(err,result)=>{
        if(err){
          console.log(err);
        }else{
          if(!result){
            console.log("Username not found");
            res.redirect("/");
          }else{
            next();
          }
        }
      });
    } catch (error) {
      console.log("Invalid token "+error);
      res.redirect("/");
    }
  }

module.exports={auth};