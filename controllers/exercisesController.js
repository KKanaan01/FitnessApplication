const express = require('express');
const axios = require('axios');

/**
 * This api request returns a list of exercises from gym workouts
 * @param {*} req 
 * @param {*} res 
 */
const fetchAllExercies = async (req, res) => {

    await axios.get(`${process.env.BASE_URL}/exercises?limit=0`, {
        headers: {
            "X-RapidAPI-Key": process.env.API_KEY,
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response.data);
            const exercises = response.data;
            res.render('exercises', {
                title: "All Exercises",
                exercises: exercises.slice(0, 20) // optional: limit to 20 for page
            });
        }
        )
        .catch(err => {
            console.error(err);
            res.status(500).json({ "errorMessage": "There has been an error fetching the exercises" });
        });

}

module.exports = {
    fetchAllExercies
}