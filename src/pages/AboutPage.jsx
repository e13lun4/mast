import React from "react"
import { useInView } from "react-intersection-observer"
import { Link as ScrollLink, Element } from "react-scroll"

import firstImage from "../assets/aboutPageFirstImage.png"
import secondImage from "../assets/aboutPageSecondImage.png"
import thirdImage from "../assets/argoGIF.gif"
import fourthImage from "../assets/fluxImage.png"

const AboutPage = () => {
  const { ref: introductionPhilRef, inView: introductionPhilInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1
    })

  const { ref: gitopsExampleRef, inView: gitopsExampleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { ref: popularInstrumentsRef, inView: popularInstrumentsInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1
    })

  return (
    <div className="h-auto min-h-screen flex text-left text-white flex-col bg-gray box-border">
      <aside className="animate-fadeIn2 fixed top-20 left-10 bg-gray-800 p-4 rounded-2xl shadow-lg hidden sm:block">
        <nav className="flex flex-col space-y-4">
          <ScrollLink
            to="section-introduction-ci-cd"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFA500]"
            className="cursor-pointer transition-colors duration-300 hover:text-orange"
          >
            Введение в CI/CD
          </ScrollLink>
          <ScrollLink
            to="section-introduction-gitops"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFA500]"
            className="cursor-pointer transition-colors duration-300 hover:text-orange"
          >
            Введение в философию GitOps
          </ScrollLink>
          <ScrollLink
            to="section-gitops-kubernetes"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFA500]"
            className="cursor-pointer transition-colors duration-300 hover:text-orange"
          >
            GitOps на примере Kubernetes
          </ScrollLink>
          <ScrollLink
            to="section-popular-instruments"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFA500]"
            className="cursor-pointer transition-colors duration-300 hover:text-orange"
          >
            Популярные инструменты
          </ScrollLink>
        </nav>
      </aside>
      <div className="sm:pl-52">
        <Element name="section-introduction-ci-cd">
          <section className="pt-16 px-8 sm:px-24 lg:px-48 xl:px-72 2xl:px-96 pb-16 animate-fadeIn2">
            <div className="pb-8">
              <p className="text-2xl sm:text-3xl font-bold">Введение в CI/CD</p>
            </div>
            <div>
              <p className="text-lg sm:text-xl">
                Чтобы разобраться и понять идеи GitOps, нужно познакомиться с
                концепцией CI/CD, которая является неотъемлемой частью
                методологии. <br /> <br />
                CI/CD — это комбинация современных принципов из DevOps- и
                Agile-практик в разработке ПО — непрерывной интеграции и
                поставки обновлений.
                <br />
                <br />
              </p>
              <div className="px-7">
                <ul
                  style={{ "list-style-type": "'— '" }}
                  className="text-lg sm:text-xl"
                >
                  <li>
                    <strong>Непрерывная интеграция</strong> (Continuous
                    Integration, CI) — это подход в разработке, который
                    заключается в постоянной проверке и слиянии изменений кода в
                    общую ветку центрального репозитория.
                  </li>
                  <img src={firstImage} className="py-4 max-w-full h-auto" />
                  <p className="pb-4">
                    Проще говоря, перед самим слиянием изменений в общую ветку
                    код проекта проверяется на сервере вроде Jenkins, который
                    знает, как его собрать и протестировать.
                  </p>
                  <li>
                    <strong>Непрерывная поставка</strong> (Continuous Delivery,
                    CD) — это подход, при котором программное обеспечение
                    производится короткими итерациями, с высокой частотой
                    обновления центрального репозитория.
                  </li>
                  <img src={secondImage} className="py-4 max-w-full h-auto" />
                  <p>
                    Бенефит CD прост: чем чаще разработчики «пушат» изменения в
                    центральный репозиторий, тем проще поддерживать проект. Так,
                    если пользователи начнут отправлять репорты на последнее
                    обновление, можно вернуться к предыдущему, не задев рабочие
                    фичи. <br /> <br />С помощью CI/CD можно автоматизировать
                    Git-процессы, развертывание приложений и сосредоточиться на
                    безопасности и бизнес-логике.
                  </p>
                </ul>
              </div>
            </div>
          </section>
        </Element>
        <Element name="section-introduction-gitops">
          <section
            className={`pt-16 px-8 sm:px-24 lg:px-48 xl:px-72 2xl:px-96 pb-16 transition-opacity duration-1000 ease-in-out delay-200 ${
              introductionPhilInView ? "opacity-100" : "opacity-0"
            }`}
            ref={introductionPhilRef}
          >
            <div className="pb-8">
              <p className="text-2xl sm:text-3xl font-bold">
                Введение в философию GitOps
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold pb-4">
                Что такое GitOps
              </p>
              <p className="text-lg sm:text-xl pb-4">
                GitOps — это методология, которая взяла лучшие практики из
                разработки и перенесла их на инфраструктуру. Так, последнюю
                можно рассматривать как код (по модели IaC, Infrastructure as
                Code) и декларативно описывать с помощью JSON- или YAML-файлов.
                На основе них специальное ПО будет автоматически разворачивать
                инфраструктуру — в том числе по процессам CI/CD.
              </p>
              <p className="text-xl sm:text-2xl font-bold pb-4">GitOps и Git</p>
              <p className="text-lg sm:text-xl pb-4">
                Инфраструктура по GitOps использует Git в качестве основной
                системы управления. В удаленном репозитории хранятся и
                тестируются кластеры, история их обновлений и другая информация.
                Так, если раньше разработчики «пушили» из репозиториев только
                код, теперь можно делать то же самое, но с полноценными
                образами, описаниями кластеров и Helm-чартами.
              </p>
              <p className="text-xl sm:text-2xl font-bold pb-4">
                GitOps и DevOps
              </p>
              <p className="text-lg sm:text-xl pb-4">
                Разработчики из Atlassian считают, что сама идея Infrastructure
                as Code пришла из DevOps. Методология GitOps же просто внедряет
                DevOps-методы, тем самым закрывает «пропасть» между системным
                администрированием и разработкой распределенных облачных
                приложений.
              </p>
              <p className="text-xl sm:text-2xl font-bold pb-4">
                Принципы и преимущества GitOps
              </p>
              <p className="text-lg sm:text-xl">
                Давайте зарезюмируем и выделим основные принципы, которые
                применяются при работе с GitOps.
              </p>
              <div className="px-7">
                <ul
                  style={{ "list-style-type": "'— '" }}
                  className="text-lg sm:text-xl"
                >
                  <li>
                    <strong>Декларативная система.</strong> По GitOps вся
                    инфраструктура описана в YAML- или JSON-файлах декларативно.
                    Хотя по умолчанию IaC можно описать и процедурным подходом.
                    Главное, чтобы это было однозначно и исчерпывающе.
                  </li>
                  <p>
                    IaC — это не только серверы, но и настройка политик доступа,
                    сети и всего того, что может предложить облачный провайдер.
                  </p>
                  <li>
                    <strong>Система контроля версий.</strong> Это буквально
                    «фундамент» и главное преимущество GitOps. И так как Git —
                    самая популярная DVCS-система, методология называется именно
                    GitOps, а не, например, SVNOps.
                  </li>
                  <p>
                    Каждое обновление инфраструктуры проходит через
                    Git-репозиторий и проверяется после запроса на слияние с
                    главной веткой (pull-requests). Группа специалистов
                    тестирует обновление и либо принимает его, либо отклоняет.
                    Это важное преимущество системы Git.
                  </p>
                  <p>
                    Кроме того, с помощью системы прав в Git можно
                    разграничивать доступы к разным частям вашего проекта. Так,
                    например, простые участники не могут принять запрос на
                    слияние или незаметно изменить конфигурацию инфраструктуры.
                  </p>
                  <li>
                    <strong>Автоматизация изменений.</strong> После того, как
                    специалисты утверждают слияние, изменения автоматически
                    развертываются в приложении.
                  </li>
                  <p>
                    Система сама выделяет и устраняет разницу между содержимым в
                    Git-репозитории и на серверах. Например, если в
                    конфигурационном файле обозначено, что нужен дополнительный
                    веб-сервер, система должна его автоматически поднять и
                    настроить окружение.
                  </p>
                  <p>
                    Большой пласт работ выполняет специальный программный агент
                    — оператор. Он проверяет, есть ли обновления в репозитории.
                  </p>
                  <p>
                    Теперь давайте рассмотрим один из примеров работы с GitOps.
                  </p>
                </ul>
              </div>
            </div>
          </section>
        </Element>
        <Element name="section-gitops-kubernetes">
          <section
            className={`pt-16 px-8 sm:px-24 lg:px-48 xl:px-72 2xl:px-96 pb-16 transition-opacity duration-1000 ease-in-out delay-200 ${
              gitopsExampleInView ? "opacity-100" : "opacity-0"
            }`}
            ref={gitopsExampleRef}
          >
            <div className="pb-8">
              <p className="text-2xl sm:text-3xl font-bold">
                GitOps на примере Kubernetes
              </p>
            </div>
            <div className="text-lg sm:text-xl">
              <p>
                Обычно GitOps применяют в разработке облачных приложений на базе
                оркестраторов вроде Kubernetes. Поэтому GitOps-инструменты — о
                них мы поговорим ниже — содержат методы, объединяющие
                развертывание, мониторинг, управление кластерами и приложениями.
                С помощью них можно автоматически обновлять контейнеры — в
                соответствии с последней версией главной ветки.
              </p>
              <p>
                Оператор здесь выполняет роль посредника между системной
                оркестрации и конвейером, который проверяет и автоматически
                синхронизирует состояние репозитория с облачным приложением.
                Вот, как это работает:
              </p>
              <div className="px-5 pt-4">
                <ol style={{ "list-style-type": "decimal" }}>
                  <li>
                    Разработчик изменил конфигурацию контейнера и делает pull
                    request, чтобы выпустить изменение в прод.
                  </li>
                  <li>
                    Специалисты проверяют код и отклоняют/утверждают слияние.{" "}
                  </li>
                  <li>
                    Слияние активирует конвейер CI/CD, который автоматически
                    тестирует и добавляет код в реестр (registry).
                  </li>
                  <li>
                    Оператор регистрирует и скачивает обновление, а после —
                    отправляет подключенному локальному репозиторию.
                  </li>
                </ol>
              </div>
              <p>
                Готово — обновление вышло в продакшен. Но все ли так просто на
                практике?
              </p>
            </div>
          </section>
        </Element>
        <Element name="section-popular-instruments">
          <section
            className={`pt-16 px-8 sm:px-24 lg:px-48 xl:px-72 2xl:px-96 pb-16 transition-opacity duration-1000 ease-in-out delay-200 ${
              popularInstrumentsInView ? "opacity-100" : "opacity-0"
            }`}
            ref={popularInstrumentsRef}
          >
            <div className="pb-8">
              <p className="text-2xl sm:text-3xl font-bold">
                Популярные инструменты
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl pb-4">
                Давайте рассмотрим популярные инструменты, которые можно
                использовать для управления контейнерными приложениями по
                GitOps.
              </p>
              <p className="text-xl sm:text-2xl font-bold pb-4">ArgoCD</p>
              <p className="text-lg sm:text-xl">
                Это мощный декларативный GitOps-инструмент для непрерывной
                доставки (Continuous Delivery, CD) и развертывания приложений
                K8s. Важная особенность — «мультиплексное» управление: оператор
                ArgoCD может работать сразу с несколькими кластерами. Кроме
                того, инструмент предоставляет не только эффективный CD, но и
                удобный UI/UX. Посмотрите сами: интерфейс интуитивно понятен
                «даже ребенку».
              </p>
              <img src={thirdImage} className="py-4 max-w-full h-auto" />
              <p className="text-lg sm:text-xl">
                Решение хорошо подходит тем, кто хочет попрактиковаться и
                продолжить в GitOps: ArgoCD просто развернуть, настроить и
                поддерживать.
              </p>
              <a
                href="https://argo-cd.readthedocs.io/en/stable/cli_installation/"
                className="transition-colors duration-300 hover:text-blue-500 text-orange text-lg sm:text-xl"
              >
                Начать работу с ArgoCD
              </a>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold py-4">Flux</p>
              <p className="text-lg sm:text-xl">
                Не путайте этот инструмент с React-архитектурой Flux. Это второе
                по популярности решение после ArgoCD. Инструмент GitOps Flux
                также предназначен для CD приложений Kubernetes, но может
                управлять только одним кластером и репозиторием. В остальном —
                функционал идентичен.
              </p>
              <img src={fourthImage} className="py-4 max-w-full h-auto" />
              <p className="text-lg sm:text-xl">
                Flux может работать только с одним кластером, а ArgoCD — с
                несколькими.
              </p>
              <a
                href="https://fluxcd.io/"
                className="transition-colors duration-300 hover:text-blue-500 text-orange text-lg sm:text-xl"
              >
                Узнать больше о Flux
              </a>
            </div>
            <div className="pb-8">
              <p className="text-xl sm:text-2xl font-bold py-4">
                Helm operator
              </p>
              <p className="text-lg sm:text-xl">
                Это open source-оператор (GitOps-расширение) Kubernetes для
                декларативного управления HelmRelease, диаграммами Хелма. Его
                можно использовать в качестве расширения для Flux, чтобы
                автоматизировать релизы Helm-чартов.
              </p>
            </div>
            <hr />
            <div className="pt-8">
              <p className="text-lg sm:text-xl">
                Мы рассмотрели лишь малую часть инструментов GitOps. Вы также
                можете использовать Jenkins X, Quay, Gitkube, WKSctl и другие
                решения — выбор зависит от задачи.
              </p>
            </div>
          </section>
        </Element>
      </div>
      {/* <section className="h-screen py-20 text-center bg-gray">
        <h2 className="text-4xl font-bold text-white">О GitOps</h2>
        <p className="mt-4 text-lg text-orange">
          GitOps - это подход к управлению инфраструктурой с помощью
          репозиториев Git. Изменения в системе отслеживаются и управляются
          через код.
        </p>
      </section> */}
    </div>
  )
}

export default AboutPage
