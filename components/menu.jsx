import React, { useImperativeHandle, useRef } from "react";
import styles from "./menu.module.scss";
import Link from "next/link";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="0"
        className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}>
            <Link href="">Overview</Link>
            <Link href="">Investment Round</Link>
            <Link href="">Deposit</Link>
            <Link href="">Withdraw</Link>
            <Link href="">FAQs</Link>
            <Link href="">Settings</Link>
        <div>
        </div>
      </div>
    );
  }

  close() {
    this.setState({ open: false });
  }

  open() {
    this.setState({ open: true });
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open();
    },
  }));

  return <Menu ref={menuRef} {...props} />;
});
