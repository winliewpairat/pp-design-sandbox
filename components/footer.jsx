import React from "react";
import styles from "../components/summary.module.scss";

export default function Overview() {
  return (
    <div style={{ margin: "auto", width: "auto"}}>
      <div style={{ padding: "24px" }}>
        <div className={styles.smallText}>
          © 2021 ClearMatch Capital.
          <br />
          If you have any question please feel free to
          <br />
          contact us at hello@clearmatch.co.th
        </div>
      </div>
    </div>
  );
}
