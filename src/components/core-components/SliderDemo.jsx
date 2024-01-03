import React from "react";
import * as Slider from "@radix-ui/react-slider";
import "../../css/global.css";
import "../../css/slider.css";

const SliderDemo = () => (
  <div className="ComponentBox">
    <form>
      <Slider.Root
        className="SliderRoot"
        defaultValue={[50]}
        max={100}
        step={1}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
    </form>
  </div>
);

export default SliderDemo;
