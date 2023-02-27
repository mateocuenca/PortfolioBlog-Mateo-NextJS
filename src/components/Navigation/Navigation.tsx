import Link from "next/link";
import Logo from "../../../public/logo_matecuenca.svg";
import ThemeToggle from "./ThemeToggle";
import globalStyles from "@/styles/Global.module.css";
import styles from "./Navigation.module.css";
import { LinkedinLogo, GithubLogo } from "phosphor-react";
import { useRouter } from "next/router";

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <div className={globalStyles.container}>
      <div className={styles.navigationContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Logo className={styles.matecuencaLogo} />
          </Link>
          <ThemeToggle />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? styles.activeLink : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={pathname === "/blog" ? styles.activeLink : undefined}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  pathname === "/about" ? styles.activeLink : undefined
                }
              >
                About
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/mateo-cuenca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={globalStyles.hideMobile}>
                  <LinkedinLogo size={20} />
                </span>
                <span className={globalStyles.hideDesktop}>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mateocuenca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={globalStyles.hideMobile}>
                  <GithubLogo size={20} />
                </span>
                <span className={globalStyles.hideDesktop}>Github</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
