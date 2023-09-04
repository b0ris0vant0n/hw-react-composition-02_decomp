import React from "react";
import "./App.css";
import Block from "./components/Block";
import TitleWidgetList from "./components/TitleWidgetList";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Teaser from "./components/Teaser";
import Stocks from "./components/Currency";
import Search from "./components/Search";
import Banner from "./components/Banner";
import Weather from "./components/Weather";
import shortid from "shortid";

function App() {
  const titleNews = [
    {
      href: "#",
      text: "Сейчас в СМИ",
    },
    {
      href: "#",
      text: "в Германии",
    },
    {
      href: "#",
      text: "Рекомендуем",
    },
  ];

  const listNews = [
    {
      icon: "icon",
      href: "#",
      title: "*утин упростил получение автомобильных номеров",
    },
    {
      icon: "icon",
      href: "#",
      title: "В команде Зеленского раскрыли план реформ на Украине",
    },
    {
      icon: "icon",
      href: "#",
      title: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье",
    },
    {
      icon: "icon",
      href: "#",
      title: "Суд закрыл дело Демпартии США против России",
    },
    {
      icon: "icon",
      href: "#",
      title: "На Украине призвали создать ракеты для удара по",
    },
  ];

  const dataTeaser = {
    img: "/",
    href: "#",
    title: "Работа над ошибками",
    text: "Смотрите на Яндексе и запоминайте",
  };

  const searchLink = [
    "Видео",
    "Картинки",
    "Новости",
    "Карты",
    "Маркет",
    "Переводчик",
    "Эфир",
    "ещё",
  ];

  const dataBanner = {
    img: "/",
    href: "#",
  };

  const dataVisited = [
    {
      href: "#",
      title: "Недвижимость",
      text: " - о сталинках",
    },
    {
      href: "#",
      title: "Маркет",
      text: " - люстры и люстры",
    },
    {
      href: "#",
      title: "Авто.ру",
      text: " - привод 4х4 до 500 000",
    },
  ];

  const tvProgramm = [
    {
      href: "#",
      title: "02:00 THT.Best",
      text: " THT International",
    },
    {
      href: "#",
      title: "02:15 Джинглики",
      text: " Карусель INT",
    },
    {
      href: "#",
      title: "02:25 Наедине со всеми",
      text: " Первый",
    },
  ];

  const dataStream = [
    {
      icon: "icon",
      href: "#",
      title: "Управление как исскуство",
      text: " Успех",
    },
    {
      icon: "icon",
      href: "#",
      title: "Ночь. Мир в это время",
      text: " earthTV",
    },
    {
      icon: "icon",
      href: "#",
      title: "АндрейВозн...",
      text: " Совершенно секретно",
    },
  ];

  return (
    <React.Fragment>
      <Block className="top-block">
        <Block className="news">
          <TitleWidgetList items={titleNews}>
            <span className="date">31 июля, среда 02 32</span>
          </TitleWidgetList>
          <List>
            {listNews.map((item) => (
              <ListItem key={shortid.generate()} item={item} />
            ))}
          </List>
          <Block className="stocks">
            <Stocks />
          </Block>
        </Block>
        <Block className="teaser">
          <Teaser {...dataTeaser} />
        </Block>
      </Block>
      <Block className="search">
        {searchLink.map((item) => (
          <a key={shortid.generate()} href="#">
            {item}
          </a>
        ))}
        <Search />
        <span>
          Найдется всё. Например,{" "}
          <span className="exa-searche">фазы луны сегодня</span>
        </span>
      </Block>
      <Block className="banner">
        <Banner {...dataBanner} />
      </Block>
      <Block className="columns">
        <Block className="col-4">
          <Block className="weather">
            <TitleWidgetList
              items={[
                {
                  href: "#",
                  text: "Погода",
                },
              ]}
            />
            <Weather />
          </Block>
          <Block className="visited">
            <TitleWidgetList
              items={[
                {
                  href: "#",
                  text: "Посещаемое",
                },
              ]}
            />
            <List>
              {dataVisited.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
        <Block className="col-4">
          <Block className="maps">
            <a href="#">Карта Германии</a>
            <p>Расписания</p>
          </Block>
          <Block className="tv">
            <TitleWidgetList
              items={[
                {
                  href: "#",
                  text: "Телепрограмма",
                },
              ]}
            >
              <span className="tv-show">Эфир</span>
            </TitleWidgetList>
            <List>
              {tvProgramm.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
        <Block className="col-4">
          <Block className="stream">
            <TitleWidgetList
              items={[
                {
                  href: "#",
                  text: "Эфир",
                },
              ]}
            />
            <List>
              {dataStream.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
      </Block>
    </React.Fragment>
  );
}

export default App;
