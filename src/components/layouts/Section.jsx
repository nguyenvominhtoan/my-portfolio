export default function Section({ children, id, extraStyle = {} }) {
  return (
    <section
      id={id}
      style={{
        width: "100%",
        paddingTop: "7rem",
        paddingBottom: "7rem",
        borderTop: "1px solid #141414",
        ...extraStyle,
      }}
    >
      {children}
    </section>
  );
}
