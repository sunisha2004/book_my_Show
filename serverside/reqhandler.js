import movieSchema from './model/show.model.js'
import userSchema from './model/user.model.js'
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken';
const {sign}= pkg

export async function addMovie(req,res) {

    console.log(req.body);

    const{...datas}=req.body

    await movieSchema.create({...datas}).then(()=>{
        res.status(201).send({msg:"Successfull"})
    }).catch((error)=>{
        res.status(404).send({error:error})
    })  
    
}

export async function getmovies(req, res) {
    console.log("==================================================");
    console.log(req.user);
    
    const usr = await userSchema.findOne({_id:req.user.userID});
    console.log(usr);

    console.log("get movies");

    const data = await movieSchema.find();
    console.log(data);
    
    
    res.status(200).send({data,user:usr.name}); 
}

export async function adduser(req,res) {
    console.log(req.body);
    const {name,email,pass,cpass}=req.body
    if(!(name&&email&&pass&&cpass))
        return res.status(500).send({msg:"invalid input"})
    else if(pass!=cpass)
        return res.status(500).send({msg:"password missmatch"})

    bcrypt.hash(pass,10).then((hpwd)=>{
        console.log(hpwd)
        console.log("data added");
        userSchema.create({name,email,pass:hpwd}).then(()=>{
            res.status(201).send({msg:"Successfull"})
        }).catch((error)=>{
            res.status(404).send({error:error})
        }) 
        
    }).catch((error)=>{
        console.log(error)
        
    })
    
}

export async function getMovie(req,res) {
    console.log(req.params);
    const {id}=req.params;
    const data=await movieSchema.findOne({_id:id})
    console.log(data);

    res.status(200).send(data)
    
    
}


export async function login(req,res) {

    console.log(req.body);
    const { email,pass} = req.body;

    console.log(email,pass);

    if (!(email && pass))
        return res.status(500).send({msg:"fields are empty"})
    const user= await userSchema.findOne({email})

    if (!user)
        return res.status(500).send({msg:"user not exist"})
    const success= await bcrypt.compare(pass,user.pass)
    console.log(success);

    if (success!== true)
        return res.status(500).send({msg:"user or password not exist"})
    const token= await sign({userID:user._id},process.env.JWT_KEY,{expiresIn:"24h"})
    res.status(200).send({token})
    
    
}

export async function home(req,res) {

    console.log("end point");

    console.log(req.user.userID);
    const user=userSchema.findOne({_id:req.user.userID})
    res.status(200).send({user:user.username})
    
    
    
}

