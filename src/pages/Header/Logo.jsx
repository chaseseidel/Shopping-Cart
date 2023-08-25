import MainLogo from "../../../public/logo.webp";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div
      className="logo-container"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={MainLogo} alt="Logo" id="logo" />
      <h1>StyleCart</h1>
    </div>
  );
}

export default Logo;
