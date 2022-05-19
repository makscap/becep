import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className="container">
      <ul className={s.linkList}>
        <li className={s.linkItem}>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.66673 11.1666V7.83331H8.3334V11.1666C8.3334 11.5333 8.6334 11.8333 9.00007 11.8333H11.0001C11.3667 11.8333 11.6667 11.5333 11.6667 11.1666V6.49998H12.8001C13.1067 6.49998 13.2534 6.11998 13.0201 5.91998L7.44673 0.89998C7.1934 0.673314 6.80673 0.673314 6.5534 0.89998L0.980065 5.91998C0.753399 6.11998 0.893399 6.49998 1.20007 6.49998H2.3334V11.1666C2.3334 11.5333 2.6334 11.8333 3.00007 11.8333H5.00007C5.36673 11.8333 5.66673 11.5333 5.66673 11.1666Z"
              fill="#0B0C0C"
            />
          </svg>
        </li>
        <li className={s.linkItem}>
          <Link to="/" className={s.linkUrl}>
            Home
          </Link>
        </li>

        <li className={s.linkItem}>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.919912 12.5067C1.24658 12.8334 1.77325 12.8334 2.09991 12.5067L7.63991 6.9667C7.89991 6.7067 7.89991 6.2867 7.63991 6.0267L2.09991 0.486699C1.77325 0.160033 1.24658 0.160033 0.919912 0.486699C0.593245 0.813366 0.593245 1.34003 0.919912 1.6667L5.74658 6.50003L0.913245 11.3334C0.593245 11.6534 0.593245 12.1867 0.919912 12.5067Z"
              fill="#0B0C0C"
            />
          </svg>
        </li>

        <li className={s.linkItem}>
          <Link to="/actuality/" className={s.linkUrl}>
            Actuality
          </Link>
        </li>

        <li className={s.linkItem}>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.919912 12.5067C1.24658 12.8334 1.77325 12.8334 2.09991 12.5067L7.63991 6.9667C7.89991 6.7067 7.89991 6.2867 7.63991 6.0267L2.09991 0.486699C1.77325 0.160033 1.24658 0.160033 0.919912 0.486699C0.593245 0.813366 0.593245 1.34003 0.919912 1.6667L5.74658 6.50003L0.913245 11.3334C0.593245 11.6534 0.593245 12.1867 0.919912 12.5067Z"
              fill="#0B0C0C"
            />
          </svg>
        </li>

        <li className={s.linkItem}>
          <Link to="/actuality/activity/" className={s.linkUrl}>
            Activity
          </Link>
        </li>

        <li className={s.linkItem}>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.919912 12.5067C1.24658 12.8334 1.77325 12.8334 2.09991 12.5067L7.63991 6.9667C7.89991 6.7067 7.89991 6.2867 7.63991 6.0267L2.09991 0.486699C1.77325 0.160033 1.24658 0.160033 0.919912 0.486699C0.593245 0.813366 0.593245 1.34003 0.919912 1.6667L5.74658 6.50003L0.913245 11.3334C0.593245 11.6534 0.593245 12.1867 0.919912 12.5067Z"
              fill="#0B0C0C"
            />
          </svg>
        </li>
      </ul>

      <p>NOT FOUND!</p>
    </div>
  );
};

export default NotFound;
