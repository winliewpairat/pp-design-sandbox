import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import Menu from "./menu";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.container}>
          <div className={styles.logo}>
            <strong>Supply Chain Finance</strong> by ClearMatch Capital
          </div>
          <nav className={styles.navbar}>
            <div className={styles.linkStyle}>
              <Link href="">Overview</Link>
              <Link href="">Deposit</Link>
              <Link href="">Withdraw</Link>
              <Link href="">FAQs</Link>
              <Link href="">Settings</Link>
            </div>
          </nav>
        </div>
        <div className={styles.containerMobile}>
          <div className={styles.logo}>
            <strong>Supply Chain Finance</strong> by ClearMatch Capital
          </div>
          <nav className={styles.navbar}>
            <div className={styles.linkStyle}>
              <button className="button" onClick={() => this.toggleMenu()}>
                <div className={styles.menuButton}>Menu</div>
              </button>
              <Menu ref={(el) => (this.childMenu = el)} />{" "}
            </div>
          </nav>
        </div>
      </header>
    );
  }
  toggleMenu() {
    this.childMenu.open();
  }
}
export default NavBar;
