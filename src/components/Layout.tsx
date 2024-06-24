import { ReactNode } from "react";

const Layout = ({
  children,
  backgroundColor,
  title,
}: {
  children?: ReactNode;
  backgroundColor?: string;
  title?: string;
}) => {
  const bgColor =
    backgroundColor === "red"
      ? "#FF4141"
      : backgroundColor === "yellow"
      ? "#FFCB45"
      : "white";
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        padding: "100px",
        backgroundColor: bgColor,
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};
export default Layout;
