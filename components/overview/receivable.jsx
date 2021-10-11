/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "./receivable.module.scss";

class Receivable extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.gridHeader}>
            <div className={styles.h5}>Fund Receivable</div>
          </div>
          <div>
            <div className={styles.wrapper}>
              <div className={styles.gridContainer}>
                <div className={styles.h6}>In 7 days</div>
              </div>
              <div className={styles.gridContainer}>
                <div className={styles.h5}>15,000,000 ฿</div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.gridContainer}>
                <div className={styles.h6}>In 14 days</div>
              </div>
              <div className={styles.gridContainer}>
                <div className={styles.h5}>15,000,000 ฿</div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.gridContainer}>
                <div className={styles.h6}>In 30 days</div>
              </div>
              <div className={styles.gridContainer}>
                <div className={styles.h5}>15,000,000 ฿</div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.gridContainer}>
                <div className={styles.h6}>In 60 days</div>
              </div>
              <div className={styles.gridContainer}>
                <div className={styles.h5}>15,000,000 ฿</div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.gridContainer}>
                <div className={styles.h6}>More than 60 days</div>
              </div>
              <div className={styles.gridContainer}>
                <div className={styles.h5}>15,000,000 ฿</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Receivable;
