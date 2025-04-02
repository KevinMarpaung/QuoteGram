import { useEffect, useState } from "react";
import CardQuotes from "../Components/Elements/Card";
import Navbar from "../Components/Elements/Navbar";
import ActionFilter from "../Components/Fragments/ActionFilter";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const NewData = localStorage.getItem("dataquotes");
    if (NewData) {
      try {
        const parse = JSON.parse(NewData);
        setData(parse);
        console.log("data berhasil diambil");
      } catch (error) {
        console.log("data gagal diambil", error);
      }
    }
  }, []);

  const handleFilter = (nama) => {
    const NewData = localStorage.getItem("dataquotes");
    if (NewData) {
      try {
        const parse = JSON.parse(NewData);
        const updatedData = parse.filter((dat) => dat.Pemotivasi === nama);
        setData(updatedData);
        console.log("Data yang difilter:", updatedData);
      } catch (error) {
        console.log("Data gagal difilter", error);
      }
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex border  justify-center gap-2">
        {data.map((dat) => {
          return (
            <>
              <ActionFilter
                handleFilter={handleFilter}
                key={dat.id}
                nama={dat.Pemotivasi}
              />
            </>
          );
        })}
      </div>
      <div className="mx-4 my-4 flex gap-2 flex-wrap  justify-center">
        {data.length > 0 ? (
          data.map((dat) => (
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
