function Icon({ children, onClick = () => {}, src, alt }) {
  return (
    <button onClick={onClick} className="header-btn">
      <img src={src} alt={alt} className="icon" />
      {children}
    </button>
  );
}

export default Icon;
