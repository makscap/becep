import { Link } from 'react-router-dom';
import s from '../ActivityView/ActivityView.module.css';

const News = ({ articles, topicName }) => {
  return (
    <>
      {articles &&
        articles.slice(0, 1).map(article => (
          <Link to={`/actuality/activity/${article.id}`} className={s.link}>
            <div className={s.section}>
              <div className={s.photoBlock}>
                <img src={article.imageUrl} alt="article" width="445px" height="312px" />
              </div>
              <div className={s.infoBlock}>
                <p className={s.dateLabel}>{`${'date'} - ${topicName}`}</p>
                <h4 className={s.label}>{article.name}</h4>
                <p className={s.text}>
                  Deň 29.9.2017 bol venovaný Noci výskumníkov v mestách Bratislava, Žilina, Banská
                  Bystrica, Poprad a Košice. Oddelenie BECEP v spolupráci s PRIBINA pripravilo pre
                  záujemcovi "Iný pohľad na cestu" a rozdávali sa aj reflexné predmety ako aj iné
                  vzdelávacie pomôcky pre bezpečný pohyb v cestnej premávke.
                </p>
              </div>
            </div>
          </Link>
        ))}
      <ul className={s.articlesSection}>
        {articles &&
          articles.slice(1).map(article => (
            <li className={s.item} key={article.id}>
              <Link to={`/actuality/activity/${article.id}`} className={s.link}>
                <img src={article.imageUrl} alt="article" width="300px"></img>
                <p className={s.dateLabel}>{`${'date'} - ${topicName}`}</p>
                <p className={s.itemTitle}>{article.name}</p>
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
    </>
  );
};

export default News;
