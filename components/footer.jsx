import React from "react";
import styles from "../components/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.smallText}>
          © 2021 ClearMatch Capital.
          <br />
          If you have any question please feel free to
          <br />
          contact us at hello@clearmatch.co.th
      </div>
    </div>
  );
}
