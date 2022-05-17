import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import s from '../ArticleDetailsView/ArticleDetailsView.module.css';

const ArticleDetailsView = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [allArticles, setAllArticles] = useState(null);
  const [oldArticlesValue, setOldArticlesValue] = useState(null);

  const TOPIC_NAME = 'Activity';

  useEffect(() => {
    fetch(`https://product-shop-api.herokuapp.com/product/${articleId}`)
      .then(r => r.json())
      .then(setArticle)
      .catch(err => {
        console.log(err);
      });
  }, [articleId]);

  useEffect(() => {
    fetch(`https://product-shop-api.herokuapp.com/product/`)
      .then(r => r.json())
      .then(setAllArticles)
      .catch(err => {
        console.log(err);
      })
      .finally(getValueArticles(articleId));
  }, [articleId]);

  function getValueArticles(indx) {
    setOldArticlesValue(Number(indx) + 2);
  }

  console.log(articleId, oldArticlesValue);

  return (
    <div className="container">
      <h2 className={s.title}>{TOPIC_NAME}</h2>
      {article && (
        <>
          <div className={s.section}>
            <div className={s.photoBlock}>
              <img src={article.imageUrl} alt="article" width="445px" height="312px" />
            </div>
            <div className={s.infoBlock}>
              <p className={s.dateLabel}>{`${'date'} - ${TOPIC_NAME}`}</p>
              <h4 className={s.label}>{article.name}</h4>
              <p className={s.text}>
                Deň 29.9.2017 bol venovaný Noci výskumníkov v mestách Bratislava, Žilina, Banská
                Bystrica, Poprad a Košice. Oddelenie BECEP v spolupráci s PRIBINA pripravilo pre
                záujemcovi "Iný pohľad na cestu" a rozdávali sa aj reflexné predmety ako aj iné
                vzdelávacie pomôcky pre bezpečný pohyb v cestnej premávke.
              </p>
            </div>
          </div>
        </>
      )}
      <ul className={s.articlesSection}>
        {allArticles && (
          <ul className={s.articlesSection}>
            {allArticles.slice(articleId, oldArticlesValue).map((el, i) => (
              <li className={s.item} key={el.id}>
                <Link to={`/actuality/activity/${el.id}`} className={s.link}>
                  <img src={el.imageUrl} alt="article" width="300px"></img>
                  <p className={s.dateLabel}>{`${'date'} - ${TOPIC_NAME}`}</p>
                  <p className={s.itemTitle}>{el.name}</p>
                  <p className={s.textOldArticles}>
                    Deň 29.9.2017 bol venovaný Noci výskumníkov v mestách Bratislava, Žilina, Banská
                    Bystrica, Poprad a Košice. Oddelenie BECEP v spolupráci s PRIBINA pripravilo pre
                    záujemcovi "Iný pohľad na cestu" a rozdávali sa aj reflexné predmety ako aj iné
                    vzdelávacie pomôcky pre bezpečný pohyb v cestnej premávke.
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
};

export default ArticleDetailsView;
