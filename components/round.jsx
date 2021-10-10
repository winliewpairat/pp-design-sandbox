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
            <div className={styles.h5}>Investment Round 📈</div>
            <div className={styles.h6}>Get ready for the next deployment!</div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.gridContainer}>
            <div className={styles.table}>
              <div className={styles.header}>Investment</div>
              <div className={styles.h6}>Supply Chain Finance</div>
            </div>
            <div className={styles.table}>
              <div className={styles.header}>Date</div>
              <div className={styles.h6}>4 Oct - 8 Oct</div>
            </div>
            <div className={styles.table}>
              <div className={styles.header}>Last Transfer Date</div>
              <div className={styles.h6}>3 Oct</div>
            </div>
            <div></div>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.table}>
              <div className={styles.header}>Investment</div>
              <div className={styles.h6}>Supply Chain Finance</div>
            </div>
            <div className={styles.table}>
              <div className={styles.header}>Date</div>
              <div className={styles.h6}>8 Oct - 14 Oct</div>
            </div>
            <div className={styles.table}>
              <div className={styles.header}>Last Transfer Date</div>
              <div className={styles.h6}>7 Oct</div>
            </div>
            <div></div>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.table}>
              <div className={styles.header}>Investment</div>
              <div className={styles.h6}>Biz Funds</div>
            </div>
            <div className={styles.table}>
              <div className={styles.header}>Date</div>
              <div className={styles.h6}>24 Oct - 30 Oct</div>
            </div>
            <div className={styles.table}>
              <div className={styles.header}>Last Transfer Date</div>
              <div className={styles.h6}>23 Oct</div>
            </div>
            <div></div>
          </div>
          <div className={styles.nested}>
              <Link href="#round">
                  <div className={styles.buttonText}>Deposit Now</div>
              </Link>
            </div>
        </div>
      </div>
    );
  }
}
export default Round;
