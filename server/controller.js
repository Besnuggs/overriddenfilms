module.exports =
{ 
getProducts: (req,res,then) => {
    const db = req.app.get('db');
    db.getProducts().then(products => {
        res.status(200).send(products)
    }).catch(err =>{
        console.log(err);
        res.status(500).send(err)
    })
},
//  addProducts = (req,res,then) => {

 }

