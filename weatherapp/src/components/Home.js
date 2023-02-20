import { useSelector } from "react-redux";
import Error from "./Error";
import Hourly from "./Hourly";
import Daily from "./Daily";
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
          <div>Hourly</div>
          <Hourly/>
          <div>Daily</div>
          <Daily />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home