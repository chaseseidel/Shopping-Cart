function Icon({ onClick = () => {}, src, alt }) {
  return (
    <button onClick={onClick} className="header-btn">
      <img src={src} alt={alt} className="icon" />
    </button>
  );
}

export default Icon;
