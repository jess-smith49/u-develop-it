const express = require ('express');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//deafualt response for any other request (NOT FOUND) Catch all
//THIS WILL OVERRIDE EVERYTHING ELSE//PLACE AT BOTTOM
app.use((req, res) =>{
    res.status(404).end();
})

//server listening
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})