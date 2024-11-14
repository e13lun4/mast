import React from "react"

const FeaturesPage = () => {
  return (
    <section className="min-h-screen animate-fadeIn2 py-16 bg-gray text-center px-8 sm:px-24 lg:px-48 xl:px-72 2xl:px-96">
      <h2 className="text-4xl font-bold text-white mb-12">
        Информация о GitOps в видеоформате
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center">
          <div className="w-full max-w-3xl h-full aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[315px]"
              // className="w-[560px] h-[315px]"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/OlvgZlhmm_4?si=ARnX_y2VIBLRiDdr"
              title="GitOps Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-3xl aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[315px]"
              // className="w-[560px] h-[315px]"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/n12xQNWhRdw?si=rFBWK1m9w9ZaW9wy"
              title="GitOps Automation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesPage
