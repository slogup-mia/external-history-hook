import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const OnePage = () => {
  const navigate = useNavigate();
  return (
    <Layout backgroundColor="yellow" title="ONE">
      <button onClick={() => navigate("/other")}> 다음 - PUSH </button>
      <button onClick={() => navigate("/other", { replace: true })}>
        다음 - REPLACE
      </button>
    </Layout>
  );
};

export default OnePage;
