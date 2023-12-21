import React from "react";

import "~/styles/ExploreContainer.css";

interface ContainerProps {
  name: string;
}

export const ExploreContainer: React.FC<ContainerProps> = ({ name }) => (
  <div className="container">
    <strong>{name}</strong>
    <p>
      Explore{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ionicframework.com/docs/components"
      >
        UI Components
      </a>
    </p>
  </div>
);
