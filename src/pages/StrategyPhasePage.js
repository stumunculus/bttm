import { useState } from "react";

export default function StrategyPhasePage({ strategies, renderStrategy }) {
  return (
    <div>
      <ul>{strategies.map(renderStrategy)}</ul>
    </div>
  );
}
