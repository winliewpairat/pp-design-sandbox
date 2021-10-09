/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "./receivable.module.scss";

class Receivable extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.h5} style={{ marginBottom: "24px" }}>
          Fund Receivable
        </div>
      <div className={styles.box}>
        <div className={styles.nested}>
          <div className={styles.header}>in 60 days</div>
          <div className={styles.h5} style={{ marginBottom: "24px" }}>
            189,014.24 ฿
          </div>
          <div className={styles.header}>in 60 days</div>
          <div className={styles.h5} style={{ marginBottom: "24px" }}>
            189,014.24 ฿
          </div>
          <div className={styles.header}>in 60 days</div>
          <div className={styles.h5} style={{ marginBottom: "24px" }}>
            189,014.24 ฿
          </div>
        </div>

        <div className={styles.nested}>
          <div className={styles.header}>in 60 days</div>
          <div className={styles.h5} style={{ marginBottom: "24px" }}>
            189,014.24 ฿
          </div>
          <div className={styles.header}>in 60 days</div>
          <div className={styles.h5} style={{ marginBottom: "24px" }}>
            189,014.24 ฿
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Receivable;
