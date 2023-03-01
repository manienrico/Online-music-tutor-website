import { Review } from '../../components/index'
import './reviews.css'

function Reviews() {
  return (
    <div id='reviews' className='app__reviews'>
      <div className="app__reviews-crud">
        CRUD
      </div>
      <div className="app__reviews-display">
        <Review name="Kris" comment="Amazing annex" timestamp="2/2/23" />
        <Review name="Jon" comment="Definitely superb" timestamp="2/4/18" />
        <Review name="Mark" comment="Great hiking experience" timestamp="6/7/12" />
        <Review name="GHorizon" comment="I love the cuisine" timestamp="2/6/10" />
        <Review name="Kimuli" comment="Nice view of the surrounding" timestamp="4/6/23" />
        <Review name="George" comment="This is an unforgetable place, so full of memories." timestamp="4/6/23" />
        <Review name="Gladys" comment="I love it here." timestamp="3/4/20" />
        <Review name="Mercy" comment="Quite affordable pricing on meals." timestamp="5/8/12" />
      </div>
    </div>
  )
}

export default Reviews