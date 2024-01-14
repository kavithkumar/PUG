const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded())


app.set('view engine','pug')
app.set('views','./views')


app.get('/hello',(req,res)=>{
    res.render('hello',{})
})

app.get('/welcome',(req,res)=>{
    const user='JOHN'
    res.render('Welcome',{user})
})

app.get('/form',(req,res)=>{
    res.render('login',{})
})

app.post('/submit',(req,res)=>{
    const {email,pwd}=req.body
    res.send(`userdetails ${email}`)
})

app.listen(8081,()=>{
    console.log('server is listening at port 8081')
})