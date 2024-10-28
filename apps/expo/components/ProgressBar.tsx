import { Color } from "@/constants/Colors";
import { View } from "react-native";
import Svg, { Rect } from "react-native-svg";

const ProgressBar = ({ progress }: { progress: number }) => {
  const barWidth = 230;
  const progressWidth = (progress / 100) * barWidth;
  return (
    <View>
      <Svg width={barWidth} height="7">
        <Rect width={barWidth} height="100%" fill="#eee" rx={3.5} ry={3.5} />
        <Rect
          width={progressWidth}
          height="100%"
          fill={Color.wadzzo}
          rx={3.5}
          ry={3.5}
        />
      </Svg>
    </View>
  );
};
export default ProgressBar;
