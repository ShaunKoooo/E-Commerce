import { useEffect, useState } from "react";
import styles from './carousel.module.scss';

const img: Array<string> = ['data:image/png;base64,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', 'data:image/jpeg;base64,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']
const Carousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.carouselContainer}>
      {img.map((item) => {
        return <img src={item} alt="圖片無法載入"></img>
      })}
      
    </div>
  );
};

export default Carousel;