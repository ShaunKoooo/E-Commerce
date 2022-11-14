
import styles from './grid.module.scss';

const GridCard = () => {
  return (
    <main className={styles.container}>
      <div className={styles.img1}>
        <img src={require('../../../public/img/p1.jpg')} alt='圖片遺失'/>
      </div>
      <div className={styles.text1}>
        <h2>夕陽</h2>
        <p>嘎嘎嗚嗚嗚</p>
      </div>

      <div className={styles.img2}>
        <img src={require('../../../public/img/p2.jpg')} alt='圖片遺失'/>
      </div>
      <div className={styles.text2}>
        <h4>title</h4>
        <p>shuan loves</p>
      </div>

      <div className={styles.img3}>
        <img src={require('../../../public/img/p3.jpg')} alt='圖片遺失'/>
      </div>
      <div className={styles.text3}>
        <h4>title</h4>
        <p>.....</p>
      </div>

      <p className={styles.content}>
        ???
      </p>
    </main>
  );
};

export default GridCard;