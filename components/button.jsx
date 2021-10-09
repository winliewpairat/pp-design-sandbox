import React from "react";
import styles from "./button.module.scss";

export default function Button(props) {
  const { label } = props;
  return (
    <div className={styles.button}>
      <div className={props.cname}>
        <div>{props.label || "Confirm"}</div>
      </div>
    </div>
  );
}
