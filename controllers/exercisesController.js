const express = require('express');
const axios = require('axios');


// this is just there so I can understand it more
// const fetchAllExercies = async (req , res) => {
//     try {
//         const response = await axios.get(`${process.env.BASE_URL}/exercises`, {
//             headers: {
//                 "X-RapidAPI-Key": process.env.API_KEY,
//             }
//         });
//         console.log(response.data);
//         res.status(201).json(response.data);

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({'error' : "There was an unexpected error fetching list of exercises"});
//     }
// }


/**
 * This api request returns a list of exercises from gym workouts
 * @param {*} req 
 * @param {*} res 
 */
const fetchAllExercies = async (req, res) => {

    await axios.get(`${process.env.BASE_URL}/exercises?limit=0`, {
        headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
            "X-RapidAPI-Host" : "exercisedb.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response.data);
            res.status(201).json(response.data);
        }
        )
        .catch(err => {
            console.error(err);
            res.status(500).json({"errorMessage" : "There has been an error fetching the exercises"});
        });

}

module.exports = {
    fetchAllExercies
}