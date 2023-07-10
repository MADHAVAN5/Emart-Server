const express = require('express');

// routes
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

// global middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", userRoutes);

app.get("/",(req,res)=>{
    res.send('Home Page')
})

app.use('', (req, res) => {
    res.status(404).send('URL not found !')
})
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));