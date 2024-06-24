import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const OtherPage = () => {
  const navigate = useNavigate();
  return (
    <Layout backgroundColor="yellow" title="OTHER">
      <button onClick={() => navigate("/final")}> 그다음 - PUSH </button>
      <button onClick={() => navigate("/final", { replace: true })}>
        그다음 - REPLACE
      </button>
    </Layout>
  );
};

export default OtherPage;
