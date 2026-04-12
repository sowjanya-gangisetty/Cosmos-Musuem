import { useState } from "react";
import { missions } from "../../data/museumData";
import PageHeading from "../../components/PageHeading";
import styles from "./missions.module.css";
import MissionDetailes from "../../components/MissionDetails";



function Missions() {
  return (
    <div>
      <PageHeading
        eventTitle="Current & Upcoming"
        title='Space'
        highlight="Missions"
        subtitle="Track humanity's current and planned journeys into the cosmos — from lunar return to interstellar probes."
      />
      <div className={styles.container}>
        <div className={styles.missionList}>
          {missions.map((mission) => (
            <MissionDetailes key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Missions;
