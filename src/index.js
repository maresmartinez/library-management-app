import React, { Component } from 'react'; // Destructured
import { render } from 'react-dom'

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

const getPercent = decimal => {
    return decimal * 100 + "%"
}

const calcGoalProgress = (total, goal) => {
    return getPercent(total / goal)
}

// Using js syntax, create js function that returns jsx elements to be rendered
const SkiDayCounter = ({total, powder, backcountry, goal}) => {
    return (
        <section>
            <div>
                <p>Total Days: {total}</p>
            </div>
            <div>
                <p>Powder Days: {powder}</p>
            </div>
            <div>
                <p>Backcountry Days: {backcountry}</p>
            </div>
            <div>
                <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
            </div>
        </section>
    )
}

render( // ReactDOM.render()
    // What we want to render
    <SkiDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goal={skiData.goal}
        />,

    // Where do we want to render this? ... to root
    document.getElementById('root') 
)