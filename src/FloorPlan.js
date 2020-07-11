import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

import "./styles.css";

const FloorPlan = props => (
  <div>
    <Bedroom bedNum={1} />
    <Kitchen />
    <Bath bathSize="Full" />
    <Bedroom bedNum={2} />
    <LivingRoom />
    <Bath bathSize="Half" />
    <Bedroom bedNum={3} />
  </div>
);

export default FloorPlan;