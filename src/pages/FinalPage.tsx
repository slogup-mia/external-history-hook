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
          style={{ width: "400px" }}
        />

        <div>
          <a href={url} role="button">
            a tag link 로 이동
          </a>
        </div>
        <div>
          <Link to={url} replace={true} role="button">
            react router dom Link - replace 로 이동
          </Link>
        </div>

        <div>
          <Link to={url} replace={true} role="button">
            react router dom Link - NON replace 로 이동
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FinalPage;
