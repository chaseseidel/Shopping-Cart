import Loader from "react-spinners/PuffLoader";

function LoadingPage() {
  return (
    <main className="loading">
      <Loader color="red" size={150} />
    </main>
  );
}

export default LoadingPage;
