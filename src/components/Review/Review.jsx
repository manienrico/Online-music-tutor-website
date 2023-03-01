import React from 'react'

import './review.css'

function Review({name,comment,timestamp}) {
  return (
    <div className='app__review'>
      <div className="app__review-card">
        <div className="app__review-card__heading">
          {name}
        </div>
        <div className="app__review-card__body">
          {comment}
        </div>
        <div className="app__review-card__signature">
          {timestamp}
        </div>
      </div>
    </div>
  )
}

export default Review