import styles from "../styles/Home.module.css";
import WaitlistForm from "../components/WaitlistForm";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <div className={styles.landingWrapper}>
        <h1 className={styles.writeCopy}>
          Write Product Descriptions <br /> That Grabs Your
          <br /> Customers Attention
        </h1>
        <WaitlistForm />
        <Subscribe />
      </div>
    </>
  );
}
