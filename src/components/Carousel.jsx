import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Carousel = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideProgress, setSlideProgress] = useState([])

  const handleProgress = (swiper) => {
    const progressArray = swiper.slides.map((slide, index) => {
      return swiper.slides[index].progress
    })
    setSlideProgress(progressArray)
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      onProgress={handleProgress}
      // style={{ width: "800px", height: "400px", borderRadius: "18px" }}
      // className="w-[800px] h-[400px] sm:w-[400px] lg:w-[800px] rounded-2xl"
      className="w-auto sm:w-[400px] lg:w-[800px] h-[400px] rounded-2xl"
    >
      {slides.map((slide, index) => {
        const progress = slideProgress[index] || 0
        const isActive = activeSlide === index
        const isExiting = !isActive && Math.abs(progress) < 0.1
        return (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={slide.altText}
              className="object-cover opacity-35 w-full h-full"
            />
            <div className="absolute top-0 w-full h-full text-center bg-black bg-opacity-50 text-white">
              <div
                className={`transition-transform duration-500 ${
                  isActive
                    ? "translate-y-0 translate-x-0 opacity-100"
                    : isExiting
                    ? "translate-y-10 translate-x-10 opacity-100"
                    : "translate-y-10 translate-x-10 opacity-100"
                }`}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg px-6">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg px-10">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
