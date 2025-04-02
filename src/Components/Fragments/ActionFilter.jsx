import ButtonCard from "../Elements/Button";

const ActionFilter = ({ nama, handleFilter }) => {
  const handleButtonClick = () => {
    handleFilter(nama); // Mengirimkan nama ke handleFilter saat tombol diklik
  };

  return (
    <div className=" ">
      <ButtonCard onclick={handleButtonClick} warna={"bg-[#2d323b]"}>
        {nama}
      </ButtonCard>
    </div>
  );
};

export default ActionFilter;
