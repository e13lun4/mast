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
      // className="w-auto sm:w-[400px] lg:w-[800px] h-[400px] rounded-2xl"
      className="w-full max-w-screen-lg mx-auto rounded-2xl"
    >
      {slides.map((slide, index) => {
        const progress = slideProgress[index] || 0
        const isActive = activeSlide === index
        const isExiting = !isActive && Math.abs(progress) < 0.1
        return (
          <SwiperSlide key={index} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={slide.image}
                alt={slide.altText}
                className="object-cover w-full 
                  h-64 sm:h-72 md:h-80 lg:h-[500px] 
                  xl:h-[550px] 2xl:h-[600px] 
                  min-[300px]:h-[300px] min-[400px]:h-[350px] min-[750px]:h-[450px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-4">
                <div
                  className={`transition-transform duration-500 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : isExiting
                      ? "translate-y-3 opacity-80"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <h2 className="text-sm sm:text-lg md:text-xl font-bold mb-2 px-10">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base px-10">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
