import { View } from "react-native";
import { bdr, p } from "nativeflowcss";
import { COUNT } from "../utils";

const NativeFlow = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View key={i} style={[bdr.color_("red"), bdr.w_1, p.p_2]} />
      ))}
    </View>
  );
};

export default NativeFlow;
