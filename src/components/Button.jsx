function Button({ text, onClick = () => {}, style }) {
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
}

export default Button;
