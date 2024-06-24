import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useState } from "react";

const FinalPage = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("http://localhost:3000");
  return (
    <Layout title="외부페이지 끝!">
      <p>돌아갈 페이지 url</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />

        <a href={url}>
          <button> a tag link</button>
        </a>

        <Link to={url} replace={true}>
          <button> react router dom Link - replace </button>
        </Link>

        <Link to={url} replace={true}>
          <button> react router dom Link - NON replace </button>
        </Link>
      </div>
    </Layout>
  );
};

export default FinalPage;
