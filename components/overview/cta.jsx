/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "./cta.module.scss";
import Button from "../button";
import Link from "next/link";

class CTA extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.nested}>
            <div className={styles.h6}>Start building wealth with us</div>
            <Button
            label="Deposit Now"
            cname={styles.btnPrimary}
            />
          </div>
          <div className={styles.nested}>
            <div className={styles.h6}>Check Investment Round</div>
            <Link href="#round">
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
