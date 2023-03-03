import { Navigation, Pagination, Scrollbar } from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Review } from '../../components/index'
import './reviews.css'
import 'swiper/css';

function Reviews() {
  return (
    <div id='reviews' className='app__reviews'>
      
      <div className="app__reviews-display">

        <Swiper
          modules={[Navigation,Pagination,Scrollbar]} 
          spaceBetween={50} 
          slidesPerView={4}
          navigation
          pagination={{clickable: true}} 
          scrollbar={{clickable: true}}
          onSwiper={(Swiper)=>console.log(Swiper)}
          onSlideChange={()=>console.log('slide change')}
        >

          <SwiperSlide>
            <Review name="Kris" comment="Amazing annex" timestamp="2/2/23" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Jon" comment="Definitely superb" timestamp="2/4/18" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Mark" comment="Great hiking experience" timestamp="6/7/12" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="GHorizon" comment="I love the cuisine" timestamp="2/6/10" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Kimuli" comment="Nice view of the surrounding" timestamp="4/6/23" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="George" comment="This is an unforgetable place, so full of memories." timestamp="4/6/23" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Gladys" comment="I love it here." timestamp="3/4/20" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Mercy" comment="Quite affordable pricing on meals." timestamp="5/8/12" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Matt" comment="Great hiking experience" timestamp="6/7/12" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Clark" comment="I love the cuisine" timestamp="2/6/10" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Batman" comment="Nice view of the surrounding" timestamp="4/6/23" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="BadBlack" comment="This is an unforgetable place, so full of memories." timestamp="4/6/23" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Justine" comment="I love it here." timestamp="3/4/20" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Joel" comment="Quite affordable pricing on meals." timestamp="5/8/12" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="app__reviews-crud">
        CRUD
      </div>
    </div>
  )
}

export default Reviews