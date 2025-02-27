import React from "react"
import PropTypes from "prop-types"

const Card = ({ cards }) => {
  if (cards.length > 0) {
    return (
      <div className="card__container">
        <div className="card card__1">
          <div className="card__back">
            <img src={cards[0]} alt="" className="card card1" />
          </div>
        </div>
        <div className="card card__2">
          <div className="card__back">
            <img src={cards[1]} alt="" className="card card1" />
          </div>
        </div>
        <div className="card card__3">
          <div className="card__back">
            <img src={cards[2]} alt="" className="card card1" />
          </div>
        </div>
        <div className="card card__4">
          <div className="card__back">
            <img src={cards[3]} alt="" className="card card1" />
          </div>
        </div>
      </div>
    )
  }
  return <></>
}

Card.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Card
