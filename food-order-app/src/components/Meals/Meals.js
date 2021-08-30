import React from 'react'
import MealSummary from './MealSummary'
import AvailableMeals from './AvailableMeals'

function Meals() {
    return (
        <React.Fragment>
            <MealSummary/>
            <AvailableMeals/>            
        </React.Fragment>
    )
}

export default Meals
