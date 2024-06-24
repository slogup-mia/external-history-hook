import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout title="외부 페이지">
      <button onClick={() => navigate("/one")}>PUSH</button>
      <button onClick={() => navigate("/one", { replace: true })}>
        REPLACE
      </button>
    </Layout>
  );
};

export default HomePage;
