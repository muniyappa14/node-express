const usermodel=require("../Model/model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const Controller={}
Controller.home=(req,res)=>{
    res.json("home page")
}
//registering user encrypting the password
Controller.register=(req,res)=>{
   res.json(req.body)
   /*const data=new usermodel(body)
   bcrypt.genSalt()//for encrypt the password
          .then((salt)=>{
            bcrypt.hash(data.password,salt)
                   .then((enc)=>{
                    data.password=enc
                    data.save()
                         .then((user)=>{
                            res.json(user)
                         })
                         .catch((err)=>{
                        res.json(err.message)
                         })
                   })
                   .catch(()=>{})
          })
          .catch((err)=>{
            res.json(err.message)
          })*/
}
Controller.update=(req,res)=>{
  
   const body=req.body
   usermodel.findOneAndUpdate({name:body.name},body)
             .then((user)=>{
                res.json(user)
             })
              .catch((err)=>{

              })
}

Controller.view=(req,res)=>{
    usermodel.find()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
       res.json(err)
    })
}

Controller.delete=(req,res)=>{
    const name=req.params.name
usermodel.findOneAndDelete()
         .then((user)=>{
            res.json(user)
         })
         .catch((err)=>{
            res.json(err.message)
         })

}
//comparing the email and password with bcrypted data
/*Controller.login=(req,res)=>{
            const body=req.body//receiving the body
            usermodel.findOne({email:body.email})
                     .then((user)=>{
                        if(!user){

                           res.json("invalid user")
                        }
                        bcrypt.compare(body.password,user.password)
                        .then((match)=>{
                           if(match){
                              res.json("login success")
                           }
                           else{
                              res.json("invalid user")
                           }
                        })

                     })
                  }
                     */

 //genrating the json web tokens
 Controller.login=(req,res)=>{
   const body=req.body
   usermodel.findOne({email:body.email})
      .then((user)=>{
         bcrypt.compare(user.password,body.password)
         .then((response)=>{
            if(response){
               const token={
                  id:user._id,
                  name:user.name,
                  email:user.email
               }
               const generatedtoken=jwt.sign(token,"pass",{expiresIn:"5d"})
               res.json(generatedtoken)
            }
            else{
               res.json("failed to generate token")
            }
         })
         .catch(()=>{
            res.json("invalid password")
         })
      })
      .catch(()=>{
         res.json("invalid email")
      })
 }

  


module.exports=Controller



