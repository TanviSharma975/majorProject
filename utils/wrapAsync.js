//This util have extra things like error
module.exports=(fn)=>{
    return(req,res,next)=>{
        fn(req,res,next).catch(next); 
    }
}
