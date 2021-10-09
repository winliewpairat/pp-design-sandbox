/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "./cta.module.scss";
import Button from "./button";
import Link from "next/link";
import Chart from "./chart"

class CTA extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.nested}>
            <div className={styles.h6}>Start building wealth with us</div>
            <Button
            label="Start Investing"
            cname={styles.btnPrimary}
            />
          </div>
          <div className={styles.nested}>
            <div className={styles.h6}>To Check Investment Round</div>
            <Link href="">
            <Button
            label="Investment Round"
            cname={styles.btnSecondary}
            />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default CTA;
