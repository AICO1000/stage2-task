
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { json } = require("body-parser");




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post("/", (req, res)=>{
  const enumOperation = ["multiplication", "addition", "subtraction" ]
  const {operation_type, x, y} = req.body 


  if(enumOperation.indexOf(operation_type) === -1) return res.status(403).json({status: "failed", message: "Invalid operation entered"})

  let result = 0
  if (operation_type === "multiplication"){
    result=x*y
  }
  if (operation_type === "addition"){
    result=x+y
  }
  if (operation_type === "subtraction"){
    result=x-y 
  }
  res.status(200).json( {slackUsername: "Aico", operation_type, result, x, y})
})


app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on 5000`)
);