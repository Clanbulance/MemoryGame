import { useState } from "react";  
import Card from "./card";





function CardGrid(
    {
    cards,
    handleCardClick
    }
){
    return(
        <div className="CardGrid">{
            cards.map((card) => 
                <Card key={card.name} name={card.name} handleCardClick={handleCardClick}/> )
        }</div>
    )
}


export default CardGrid;