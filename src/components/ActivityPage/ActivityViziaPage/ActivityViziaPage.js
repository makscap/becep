import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './ActivityViziaPage.module.css';

const ActivityViziaPage = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(3);
  const TOPIC_NAME = 'Vízia 0';

  useEffect(() => {
    fetch('https://product-shop-api.herokuapp.com/product')
      .then(r => r.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getMoreArticles = () => {
    setVisible(prev => prev + 3);
  };

  return (
    <div className="container">
      <h2 className={s.title}>Najnovšie články</h2>
      <ul className={s.articlesSection}>
        {data &&
          data.slice(0, visible).map((el, i) => (
            <li className={s.item} key={el.id}>
              <Link to={`/actuality/${el.id}`} className={s.link}>
                <img src={el.imageUrl} alt="article" width="300px"></img>
                <p className={s.dateLabel}>{`${'date'} - ${TOPIC_NAME}`}</p>
                <p className={s.itemTitle}>{el.name}</p>
                <p className={s.text}>
                  Deň 29.9.2017 bol venovaný Noci výskumníkov v mestách Bratislava, Žilina, Banská
                  Bystrica, Poprad a Košice. Oddelenie BECEP v spolupráci s PRIBINA pripravilo pre
                  záujemcovi "Iný pohľad na cestu" a rozdávali sa aj reflexné predmety ako aj iné
                  vzdelávacie pomôcky pre bezpečný pohyb v cestnej premávke.
                </p>
              </Link>
            </li>
          ))}
      </ul>
      <button onClick={getMoreArticles} className={s.btn}>
        Ďalšie články
      </button>
    </div>
  );
};

export default ActivityViziaPage;
