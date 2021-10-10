/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "./receivable.module.scss";

class Receivable extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.gridHeader}>
            <div className={styles.h5}>Fund Receivable 💰</div>
          </div>
          <div className={styles.gridContainer}>
            <div>
              <div className={styles.header}>in 7 days</div>
              <div className={styles.h5}>189,014.24 ฿</div>
            </div>
            <div>
              <div className={styles.header}>in 14 days</div>
              <div className={styles.h5}>189,014.24 ฿</div>
            </div>
            <div>
              <div className={styles.header}>in 30 days</div>
              <div className={styles.h5}>189,014.24 ฿</div>
            </div>
            <div>
              <div className={styles.header}>in 60 days</div>
              <div className={styles.h5}>189,014.24 ฿</div>
            </div>
            <div>
              <div className={styles.header}>More than 60 days</div>
              <div className={styles.h5}>189,014.24 ฿</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Receivable;
