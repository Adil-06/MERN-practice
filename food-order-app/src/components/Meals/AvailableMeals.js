import React from 'react'
import classes from './AvailableMeal.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const dummyMeals = [
    {
        id: "m1",
        name: "Burger",
        price: 250
    },
    {
        id: "m2",
        name: "Briyani",
        price: 350
    },
    {
        id: "m3",
        name: "Cake",
        price: 1250
    }
]

function AvailableMeals() {
    const mealList = dummyMeals.map((meal, index) =>  <MealItem key={index} id={meal.id} meal={meal}/> )
    return (
        <React.Fragment>
            <section className={classes.meals}>
             <Card>
                   <ul> {mealList}</ul>
            </Card>
            </section>
        </React.Fragment>
    )
}

export default AvailableMeals
