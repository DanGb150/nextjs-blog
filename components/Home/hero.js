import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Danny"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&lsquo;m Danny</h1>
      <p>
        I blog about web development - especially frameworks like React or Next
        Js
      </p>
    </section>
  );
};

export default Hero;
