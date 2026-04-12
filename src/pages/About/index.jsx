
import PageHeading from "../../components/PageHeading";
import styles from "./about.module.css";

function About() {
  return (
    <div>
      <PageHeading
        eventTitle="Our Story"
        title='About'
        highlight="CosmosMuseum"
        subtitle="A world-class destination for space science, exploration history, and the wonder of the cosmos — inspiring curious minds since 1998."
      />

      <div className={styles.container}>
            <div className={styles.missionText}>
              <span className={styles.title}>Our Mission</span>
              <h2 className={styles.sectionTitle}>Bringing the Universe to Everyone</h2>
              <p>
                CosmosMuseum was founded on a simple belief: the wonders of space
                belong to everyone. We design immersive exhibits that blend rigorous
                science with storytelling, making the vast and abstract feel personal
                and immediate.
              </p>
              <p>
                From the first moon landing to today's Mars rovers, we preserve
                humanity's greatest adventure while celebrating the scientists,
                engineers, and dreamers who make it possible.
              </p>
            </div>
      </div>
    
    </div>
  );
}

export default About;
