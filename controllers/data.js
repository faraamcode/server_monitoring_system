const data = [];
exports.jingle = ()=>{
return 9;
}
exports.getHome = (req, res, next) => {
return res.send({status : "success"})
}
exports.getData = (req, res, next) => {




  
 data.push(req.body); // How about doing this as below

 /*
 const data  = req.body
 res.status(200).json(data)

 You can even destructure the request body object as below.

 const {}  = req.body 
 */ 
  
 res.status(200).json(data)
}
exports.postData =(req, res, next) => {
 if(data.length === 0){

  res.status(400).json(data);
 }
 res.status(200).json(data);
 
}