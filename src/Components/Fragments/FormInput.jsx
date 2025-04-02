import Label from "../Elements/Label";
import Input from "../Elements/Input";

const FormInput = ({ onsubmit, register }) => {
  return (
    <form onSubmit={onsubmit}>
      <Label titleLabel={"Quotes"}>
        <Input {...register("Qoutes")} type={"text"}></Input>
      </Label>
      <Label titleLabel={"Pemotivasi"}>
        <Input {...register("Pemotivasi")} type={"text"}></Input>
      </Label>
      <Label titleLabel={"Gambar"}>
        <Input {...register("Gambar")} type={"text"}></Input>
      </Label>
      <button
        type="submit"
        className="mt-2 p-1 rounded-md text-white  bg-black w-full"
      >
        Kirim
      </button>
    </form>
  );
};

export default FormInput;
