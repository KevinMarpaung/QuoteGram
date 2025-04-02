import ButtonCard from "./Button";

const CardQuotes = ({
  children,
  pemotivasi,
  fotoPemotivasi,
  handleOnclick,
  jumlah,
}) => {
  return (
    <div className="w-[324px] h-[224] shadow bg-[#1c1f26]  rounded-xl">
      <div className="p-2   h-52  w-80">
        <img
          className="h-full  w-full rounded-md bg-cover "
          src={fotoPemotivasi}
          alt="gambar tidak ditemukan"
        />
      </div>
      <p className="text-white mx-4 line-clamp-3 text-justify">{children}</p>
      <div className=" text-white text-center rounded-sm p-2 ">
        <p className="">{`~  ${pemotivasi}~`}</p>
      </div>
      <div className=" shadow-2xl shadow-black my-2 p-1 px-10  cursor-pointer rounded-2xl flex justify-between mx-10 ">
        <ButtonCard onclick={handleOnclick} warna={"bg-[#2d323b]"}>
          ❤️‍🔥 {jumlah}
        </ButtonCard>
        <ButtonCard warna={"bg-[#2d323b]"}>💾</ButtonCard>
        <ButtonCard warna={"bg-[#2d323b]"}>🔗</ButtonCard>
      </div>
    </div>
  );
};

export default CardQuotes;
