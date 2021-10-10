/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "./round.module.scss";
import Link from "next/link";
import Button from "./button";

class Round extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.h5}>Investment Round</div>
            <div className={styles.h6}>Get ready for the next deployment!</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Investment</div>
              <div className={styles.h6}>Supply Chain Finance</div>
          </div>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Date</div>
              <div className={styles.h6}>4 Oct - 8 Oct</div>
          </div>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Last Transfer Date</div>
              <div className={styles.h6}>3 Oct</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Investment</div>
              <div className={styles.h6}>Biz Funds</div>
          </div>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Date</div>
              <div className={styles.h6}>15 Oct - 20 Oct</div>
          </div>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Last Transfer Date</div>
              <div className={styles.h6}>14 Oct</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Investment</div>
              <div className={styles.h6}>Supply Chain Finance</div>
          </div>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Date</div>
              <div className={styles.h6}>30 Oct - 8 Nov</div>
          </div>
          <div className={styles.gridContainer}>
              <div className={styles.header}>Last Transfer Date</div>
              <div className={styles.h6}>31 Oct</div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Round;
