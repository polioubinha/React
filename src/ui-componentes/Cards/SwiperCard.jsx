import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './SwiperCard.scss';
import { Link, Typography } from '@mui/material';
const CustomSwiper = () => {
  return (
    <Swiper
      pagination={true}
      navigation={{ clickable: true }}
      modules={[Pagination, Navigation]}
      className="_swiperCard">
      <SwiperSlide>
        <div className="slideContent">
          <div className="slideText">
            <span>Category App</span>
            <Typography variant='body1'>Lorem Ipsum</Typography>
            <Typography variant='body2'>Texto de pruebas para el contenido</Typography>
            <Link>Pulsame</Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slideContent">
          <div className="slideText">This is Slide 1</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper;
