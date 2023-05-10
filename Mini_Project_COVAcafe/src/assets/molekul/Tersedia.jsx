import { gql, useSubscription } from "@apollo/client";
import React, { useState } from "react";

const Tersedia = ({ Count }) => {
  return (
    <div className="container">
      <h2>Ruangan tersedia : {Count} /15 </h2>
    </div>
  );
};

export default Tersedia;
