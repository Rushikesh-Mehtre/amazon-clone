import React from "react";
import styles from "../styles/LeftMenuBar.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const LeftMenuBar = ({ hideSideNavbar }) => {
  const navBarItems = [
    {
      id: 1,
      title: "Trending",
      items: ["Best sellers", "New Releases", "Movers and Shakers"],
    },
    {
      id: 2,
      title: "Digital Content And Devices",
      items: [
        "Echo & Alexa",
        "Fire TV",
        "Kindle e-Readers and e-Books",
        "Audible audiobooks",
        "Amazon Prime Video",
        "Amazon Prime Music",
      ],
    },
    {
      id: 3,
      title: "Shop By Department",
      items: [
        "Mobiles,Computers",
        "TV,Appliances,Electronics",
        "Men's Fashion",
        "Women's Fashion",
      ],
    },
    {
      id: 4,
      title: "Programs & Features",
      items: [
        "Flights",
        "Gift cards and Mobile recharges",
        "Clearance Store",
        "#FoundItOnAmazon",
      ],
    },
    {
      id: 5,
      title: "help & settings",
      items: ["Your Account", "Customer Service", "Sign Out"],
    },
  ];

  return (
    <div className={styles.leftMenuBar}>
      <p className={styles.head}>
        <span>
          <FaUserCircle className={styles.userIcon} /> Hello, Rushikesh{" "}
        </span>
        <span>
          <ImCross className={styles.crossIcon} onClick={hideSideNavbar} />
        </span>
      </p>
      <div className={styles.navItemsContainer}>
        {navBarItems.map((item) => (
          <div className={styles.navSection}>
            <p className={styles.title}>{item.title}</p>
            <div className={styles.navItems}>
              {item.items.map((item) => (
                <p className={styles.navItem}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftMenuBar;
