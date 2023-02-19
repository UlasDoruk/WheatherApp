import Card from "./Card";
import Cities from "./Cities";
import Footer from "./Footer"
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div>
      <SearchBar />
      <div className="">
        <Cities />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Home