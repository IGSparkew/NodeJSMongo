import express from "express";


const getBook = (req, res, next) => {
    res.send('Get Books');
}


export {getBook};