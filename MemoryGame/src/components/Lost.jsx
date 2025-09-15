import React from "react";

function GameEnd({
    RestartGame,
    GameStatus
}){
    return(
        <div className="game-over-overlay">
            <div className="game-over-modal">
                <h2>
                    {GameStatus === "win" ? "You Win!" : "Game Over!"}
                </h2>
                <button className="btn" onClick={() => RestartGame()}>Play Again</button>
            </div>
        </div>
    )

}

export default GameEnd;