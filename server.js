import isUp from "is-up"
import express from "express"
let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

import  * as path from "path"
app.use(express.static("C:\\Users\\block\\Downloads\\New folder\\public"));


app.post('/stat', async function(req, res){
    let url = await isUp(req.body.value)
    console.log(url)
    res.send(url)
})
app.listen(3000, function(){})