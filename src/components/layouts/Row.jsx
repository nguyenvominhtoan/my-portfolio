import { PX } from "../../data/constants";

export default function Row({ children, style = {} }) {
  return (
    <div
      style={{
        width: "100%",
        paddingLeft: PX,
        paddingRight: PX,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
