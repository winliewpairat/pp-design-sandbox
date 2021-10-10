/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "./deployed.module.scss";
import Chart from "./chart";

class Deployed extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.h5}>Current Funds Deployed 🚀</div>
          <div className={styles.header}>
            Funds Available - 14,000,000 ฿ - 10%
          </div>
        </div>
        <div className={styles.allocateDetails}>
          <Chart className={styles.chart} />
          <div className={styles.nested}>
            <div className={styles.h6} style={{ marginBottom: "8px" }}>
              Supply Chain Finance
            </div>
            <div className={styles.header}>Amount Deployed</div>
            <div className={styles.h5} style={{ marginBottom: "8px" }}>
              189,014.24 ฿
            </div>
            <div className={styles.header}>Allocation</div>
            <div className={styles.h6}>80 %</div>
          </div>
          <div className={styles.nested}>
            <div className={styles.h6} style={{ marginBottom: "8px" }}>
              Biz Funds
            </div>
            <div className={styles.header}>Amount Deployed</div>
            <div className={styles.h5} style={{ marginBottom: "8px" }}>
              189,014.24 ฿
            </div>
            <div className={styles.header}>Allocation</div>
            <div className={styles.h6}>10 %</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Deployed;
