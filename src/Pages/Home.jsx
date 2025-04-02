import { useEffect, useState } from "react";
import CardQuotes from "../Components/Elements/Card";
import Navbar from "../Components/Elements/Navbar";
import ActionFilter from "../Components/Fragments/ActionFilter";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false); // Track if the data is filtered

  useEffect(() => {
    const NewData = localStorage.getItem("dataquotes");
    if (NewData) {
      try {
        const parse = JSON.parse(NewData);
        setData(parse);
        setFilteredData(parse); // Set filtered data to initial data
        console.log("Data berhasil diambil");
      } catch (error) {
        console.log("Data gagal diambil", error);
      }
    }
  }, []);

  const handleFilter = (nama) => {
    const filtered = data.filter((dat) => dat.Pemotivasi === nama);
    setFilteredData(filtered);
    setIsFiltered(true); // Set filter flag to true
    console.log("Data yang difilter:", filtered);
  };

  const handleResetFilter = () => {
    setFilteredData(data);
    setIsFiltered(false); // Reset filter flag to false
  };

  return (
    <>
      <Navbar />
      <div className="flex border justify-center gap-2">
        {isFiltered && (
          <button
            onClick={handleResetFilter}
            className="bg-white my-2 rounded-md px-3 py-1"
          >
            Kembali
          </button>
        )}
        {data.map((dat) => (
          <ActionFilter
            handleFilter={handleFilter}
            key={dat.id}
            nama={dat.Pemotivasi}
          />
        ))}
      </div>
      <div className="mx-4 my-4 flex gap-2 flex-wrap justify-center">
        {filteredData.length > 0 ? (
          filteredData.map((dat) => (
            <CardQuotes
              key={dat.id}
              pemotivasi={dat.Pemotivasi}
              fotoPemotivasi={dat.Gambar}
            >
              {dat.Qoutes}
            </CardQuotes>
          ))
        ) : (
          <p className="text-white text-center flex m-auto">
            Tidak ada data yang ditemukan.
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
