import React from "react";
import CardBookItem from "./CardBookItem";

function CardBookList({cards}) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <CardBookItem
          key={card.id}
          id={card.id}
          image={card.image}
          title={card.title}
          location={card.location}
          author={card.author}
          owner={card.owner}
          durationInMonths={card.durationInMonths}
          category={card.category}
          available={card.available}
        />
      ))}
    </div>
  );
}

export default CardBookList;
