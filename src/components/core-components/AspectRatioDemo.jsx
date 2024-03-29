import React from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import "../../css/global.css";
import "../../css/aspect-ratio.css";

const AspectRatioDemo = () => (
  <div className="ComponentBox">
    <AspectRatio.Root ratio={16 / 9}>
      <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    </AspectRatio.Root>
  </div>
);

export default AspectRatioDemo;
