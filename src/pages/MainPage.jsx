import React, { useState, useEffect } from "react"
import Carousel from "../components/Carousel"
import { useInView } from "react-intersection-observer"

import parallaxImage from "../assets/gitImage.png"

const slides = [
  {
    image:
      "https://www.iguides.ru/upload/iblock/561/561521c455a69c3dacb91c81f8eb1813.jpeg",
    title: "Прозрачность и контроль над процессами",
    description: `Все изменения в инфраструктуре хранятся в Git-репозиториях, что позволяет полностью отслеживать и документировать каждый шаг. Это делает каждый процесс более предсказуемым и легким для понимания как для вашей команды, так и для заинтересованных сторон. Возможность вернуться к предыдущей версии с минимальными усилиями делает GitOps идеальным выбором для компаний, стремящихся к надежности.`,
    altText: "Первый слайд"
  },
  {
    image:
      "https://cs5.pikabu.ru/post_img/big/2014/06/03/9/1401807412_1130962718.jpg",
    title: "Автоматизация без усилий",
    description:
      "Автоматизация с помощью GitOps упрощает выполнение рутинных задач и устраняет риски, связанные с человеческим фактором. От обновлений до развертывания — все процессы синхронизируются автоматически, гарантируя, что ваше приложение всегда находится в актуальном состоянии.",
    altText: "Второй слайд"
  },
  {
    image: "https://puzzleit.ru/files/puzzles/167/167220/_original.jpg",
    title: "Повышенная безопасность и соответствие требованиям",
    description:
      "С помощью GitOps вы можете с уверенностью управлять доступом и разрешениями, опираясь на права, установленные в системе контроля версий. Все изменения проходят аудит, что позволяет легко соответствовать стандартам безопасности и регуляторным требованиям. Это идеальное решение для компаний, которые ценят безопасность и стабильность.",
    altText: "Третий слайд"
  }
]

const MainPage = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const { ref: carouselRef, inView: carouselInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <div className="h-auto min-h-screen bg-gray">
      <section className="flex items-center text-center flex-col pt-10 px-4 sm:px-8">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white animate-fadeIn2">
            Добро пожаловать в GitOps
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl p-4 sm:p-8 text-white animate-fadeIn2 max-w-4xl mx-auto">
            GitOps: Будущее DevOps — Автоматизация, Прозрачность и Надежность
            <br /> <br />
            Упростите управление вашей инфраструктурой, минимизируйте риски и
            ускорьте процесс разработки с помощью GitOps — инновационного
            подхода, который меняет правила игры в DevOps.
          </p>
          <section className="relative w-full my-10 px-4 sm:px-8 lg:px-16">
            <div
              style={{
                backgroundImage: `url(${parallaxImage})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center"
                // borderRadius: 16,
                // opacity: 0.4,
                // marginLeft: 128,
                // marginRight: 128,
                // marginBottom: 64
              }}
              className="absolute inset-0 rounded-2xl opacity-40 border-solid border-black border-2"
              // className="absolute inset-0"
            ></div>
            <p className="relative rounded-2xl p-6 sm:p-12 text-white max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl">
              GitOps — это современная методология, которая предлагает
              уникальный и более эффективный способ управления инфраструктурой и
              приложениями. Этот подход основывается на использовании Git —
              надежной системы контроля версий, знакомой всем разработчикам.
              Благодаря GitOps, управление инфраструктурой превращается в
              простую и предсказуемую задачу, где каждый этап автоматизирован и
              прозрачен. Что такое GitOps? GitOps представляет собой новый
              взгляд на DevOps, где каждое изменение проходит через систему Git
              и автоматически развертывается в вашей инфраструктуре. Больше не
              нужно полагаться на сложные и громоздкие процессы управления;
              достаточно просто обновить Git-репозиторий, и система позаботится
              обо всем остальном. Ваша инфраструктура становится кодом, который
              можно контролировать, тестировать и проверять так же, как и любое
              другое приложение.
            </p>
          </section>
        </div>
      </section>
      <section className="flex items-center justify-center pb-0 pt-0 px-4 sm:px-8">
        <div
          ref={carouselRef}
          className={`w-full h-full z-0 transition-opacity duration-1000 ease-in-out delay-200 ${
            carouselInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <Carousel slides={slides} />
        </div>
      </section>
      <section className="flex items-center justify-center text-center flex-col pt-0 px-4 sm:px-8 md:px-12 lg:px-16">
        <div
          ref={textRef}
          className={`text-lg sm:text-xl md:text-2xl p-8 text-white transition-opacity duration-1000 ease-in-out delay-200 ${
            textInView ? "opacity-100" : "opacity-0"
          } max-w-4xl`}
        >
          <p>
            GitOps для бизнеса: Быстрее, Надежнее, Эффективнее <br />
            Использование GitOps дает ряд очевидных преимуществ для любого
            бизнеса:
          </p>
          <ul
            style={{ "list-style-type": "disc" }}
            className="text-left pl-6 sm:pl-8 lg:pl-12 mt-6 space-y-2"
          >
            <li>
              Ускорение времени развертывания до нескольких минут, что позволяет
              быстрее доставлять новые функции пользователям.
            </li>
            <li>
              Снижение риска ошибок благодаря автоматизации, которая устраняет
              необходимость ручного вмешательства.
            </li>
            <li>
              Более легкое управление командами разработчиков и операционных
              специалистов, так как каждый знает, что происходит в реальном
              времени.
            </li>
          </ul>
          <p className="mt-8">Преимущества:</p>
          <ul
            style={{ "list-style-type": "disc" }}
            className="text-left pl-6 sm:pl-8 lg:pl-12 mt-4 space-y-2"
          >
            <li>
              Быстрое развертывание: GitOps позволяет минимизировать простои,
              обеспечивая стабильные и предсказуемые релизы.
            </li>
            <li>
              Легкий откат изменений: Возникли проблемы? Просто откатите до
              предыдущей версии, и инфраструктура вернется в рабочее состояние.
            </li>
            <li>
              Улучшение совместной работы: Все изменения видны в реальном
              времени, что упрощает координацию между командами и делает процесс
              разработки более последовательным.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default MainPage
