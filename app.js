const express = require('express');
const app = express();
const port = 3000;
const arr_movies = [
    {
        name:"Vemon",
        code:1,
        year:2018,
        genre:["action", "cience fiction","SuperHereos","Suspense"],
        director:"Andy Serkis",
        views:100,
    },
    {
        name:"Marley & Me",
        code:2,
        year:2008,
        genre:["Romance","Comedy"],
        director:"David Frankel",
        views:1000,
    },
    {
        name:"In the heights",
        code:3,
        year:2021,
        genre:["Musical","Drama"],
        director:"Jon M. Chu",
        views:5000,
    },
    {
        name:"Hamilton",
        code:4,
        year:2020,
        genre:["Musical","Drama"],
        director:"Thomas Kail",
        views:120000,
    },
    {
        name:"End game",
        code:5,
        year:2019,
        genre:["Action","Science fiction"],
        director:"Anthony Russo",
        views:200,
    },
    {
        name:"Spy Kids",
        code:6,
        year:2001,
        genre:["Children","Action"],
        director:"Robert Rodríguez",
        views:900,
    },
    {
        name:"Sharkboy and Lavagirl",
        code:7,
        year:2005,
        genre:["Adventure","Children"],
        director:"Robert Rodríguez",
        views:10000,
    },
    {
        name:"Kangaroo Jack",
        code:8,
        year:2003,
        genre:["Action","Comedy"],
        director:"David McNally",
        views:100000,
    },
    {
        name:"Marley & Me",
        code:9,
        year:2008,
        genre:["Romance","Comedy"],
        director:"David Frankel",
        views:1,
    },
    {
        name:"Dumb and Dumber",
        code:10,
        year:1994,
        genre:["Screwball comedy"],
        director:"Peter Farrelly",
        views:10,
    }
] 

app.get('/',function(req,res) {
    res.send(arr_movies);
})

app.get('/movies/:code',function(req,res) {
    let i = req.params.code;
    res.send(arr_movies[i-1]);
})

app.get('/movies',function(req,res){
    res.send(arr_movies.sort(function(a,b){
        return b.views-a.views;
    }));
})

app.listen(port, function(){
    console.log(`Your server is working on http://localhost:${port}`)
})