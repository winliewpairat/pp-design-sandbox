import Nav from "../components/nav";
import Summary from "../components/summary";
import Deployed from "../components/deployed";
import CTA from "../components/cta";
import styles from "../pages/index.module.scss";
import Receivable from "../components/receivable";
import Footer from "../components/footer";

export default function Overview() {
  return (
    <div>
      <Nav />
      <div className={styles.main}>
        <div className={styles.container}>
          <Summary />
          <div className={styles.item1}>
            <CTA />
            <Deployed />
          </div>
        </div>
        <div className={styles.container2}>
            <Receivable />
            <Deployed />
          </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
