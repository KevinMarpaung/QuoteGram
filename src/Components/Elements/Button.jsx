const ButtonCard = ({ warna, children, onclick }) => {
  return (
    <div className={`${warna}  my-2 rounded-md px-3 py-1 `}>
      <button onClick={onclick} className="text-white bg">
        {children}{" "}
      </button>
    </div>
  );
};

export default ButtonCard;
