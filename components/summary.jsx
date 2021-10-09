import React from "react";
import styles from "./summary.module.scss";

class Summary extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <div className={styles.h4}>👋 Welcome, Mr.Andrew Wang</div>
          <div className={styles.h4 }>Here is your investment summary</div>
        </div>
        <div className={styles.stats}>
          <div className={styles.nested}>
            <div className={styles.h6}>Net Return</div>
            <div className={styles.h4}>20,200,637 ฿</div>
          </div>
          <div className={styles.nested}>
            <div className={styles.h6}>Annualized Return</div>
            <div className={styles.h3}>10 %</div>
          </div>
          <div className={styles.nested}>
            <div className={styles.h6}>Total Deposit</div>
            <div className={styles.h3}>31,200,637 ฿</div>
          </div>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.nested}>
            <div className={styles.header}>Net Return</div>
            <div className={styles.h6}>20,200,637 ฿</div>
          </div>
          <div className={styles.nested}>
            <div className={styles.header}>Net Return</div>
            <div className={styles.h6}>20,200,637 ฿</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Summary;
