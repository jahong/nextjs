import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const staticPage = ({ time }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>

      {time}

      <button
        onClick={() => router.push('/')}
      >
        home
      </button>

    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: { time: new Date().toISOString() }, revalidate: 3
  }
};

export default staticPage;
