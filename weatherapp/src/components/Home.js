import { useSelector } from "react-redux";
import Error from "./Error";
import Card from "./Card";
import Cities from "./Cities";
import Footer from "./Footer"
import SearchBar from "./SearchBar";

function Home() {

  const status = useSelector((state) => state.weather.status);

  return (
    <div>
      {status === "failed" ? (
        <Error />
      ) : (
        <>
          <SearchBar />
          <Cities />
          <Card />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home