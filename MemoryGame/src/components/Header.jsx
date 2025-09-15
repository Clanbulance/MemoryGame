import { useState } from "react";

function Header(
    {count,
    maxScore
    }
){
    return(
        <div className="header">
            <div>
            <h1>Memory Game</h1>
            <h2>Click each card without clicking it twice!</h2>
            </div>
            <div className="PointTracker">
                <p>Current Score: {count}</p>
                <p>Best Score: {maxScore}</p>
            </div>
        </div>
    )
}

export default Header;