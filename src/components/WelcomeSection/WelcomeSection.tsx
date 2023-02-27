import Image from "next/image";
import MateCuenca from "public/matecuenca.jpg";
import styles from "@/components/WelcomeSection/WelcomeSection.module.css";
import globalStyles from "@/styles/Global.module.css";
import clsx from "clsx";

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <Image
        src={MateCuenca}
        alt={"Mate Cuenca"}
        placeholder={"blur"}
        className={clsx(styles.welcomeImage, globalStyles.hideDesktop)}
      ></Image>
      <div className={styles.welcomeText}>
        <h1>
          Hi I&apos;m Mateo! 👋 <br /> A front-end developer 🖥️ and software
          engineering student at{" "}
          <a
            href={"https://21.edu.ar/"}
            target={"_blank"}
            rel={"noreferrer noopener"}
          >
            Universidad Siglo 21
          </a>
          <br />
          Currently studying my last year of degree 🎓
        </h1>
      </div>
    </section>
  );
};

export default WelcomeSection;
