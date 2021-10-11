import Nav from "../components/nav";
import Summary from "../components/overview/summary";
import Deployed from "../components/overview/deployed";
import CTA from "../components/overview/cta";
import styles from "../pages/index.module.scss";
import Receivable from "../components/overview/receivable";
import Round from "../components/overview/round"
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
          <Round />
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}
