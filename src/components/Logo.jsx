import MainLogo from "../../public/logo.webp";

function Logo() {
  return (
    <div className="logo-container">
      <img src={MainLogo} alt="Logo" id="logo" />
      <h1>StyleCart</h1>
    </div>
  );
}

export default Logo;
