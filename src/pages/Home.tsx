import ImageList from 'components/ImageList';
import { useFetchCats } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const btn = useRef(null);
  const [ref, inView] = useInView({ threshold: 0 });
  const [visible, setVisible] = useState(inView);
  const [{ data, fetchImage }] = useFetchCats();

  const LoadMoreImage = () => {
    fetchImage();
  };

  const cl = () => {
    //@ts-ignore
    btn.current.click()
  }

  // setTimeout(cl, 2000)


  useEffect(() => {
    console.log(visible);
    if (visible) {
      // @ts-ignore
      btn.current.click();
      console.log(btn.current);
    }
  }, [visible]);

  useEffect(() => {
    setVisible(inView);
  }, [inView]);

  return (
    <div>
      <div style={{ position: 'fixed', zIndex: 10 }}>
        <h1> Now {inView.toString()}</h1>
      </div>
      <ImageList images={data} lastElementRef={ref} />
      <div style={{ textAlign: 'center' }}>
        <button className='ss' ref={btn} onClick={LoadMoreImage}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
