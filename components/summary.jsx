import React from "react";
import Image from "next/image";
import styles from "./summary.module.scss";
import ReactTooltip from "react-tooltip";

class Summary extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <ReactTooltip />
        <div className={styles.welcome}>
          <div className={styles.h5}>👋 Welcome, Mr.Andrew Wang</div>
          <div className={styles.h5}>Here is your investment summary</div>
        </div>
        <div className={styles.stats}>
          <div className={styles.nested}>
            <div className={styles.tool}>
              <div className={styles.h6}>Net Return </div>
              <div className={styles.smallText} data-multiline="true" data-tip="Net Realized Return: 10,000,000 ฿ <br/> Net Unrealized Return: 10,000,000 ฿" data-effect="solid" data-type="light"> — More Details</div>
            </div>
            <div className={styles.h3}>20,200,637 ฿</div>
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
            <div className={styles.header}>Portfolio Value</div>
            <div className={styles.h6}>20,200,637 ฿</div>
          </div>
          <div className={styles.nested}>
            <div className={styles.header}>Total Withdraw</div>
            <div className={styles.h6}>20,200,637 ฿</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Summary;
