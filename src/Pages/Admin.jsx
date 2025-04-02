import { useState } from "react";
import FormInput from "../Components/Fragments/FormInput";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

const Admin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { value, setValue } = useState("");
  const onSubmitt = (data) => {
    if (data) {
      const datalama = JSON.parse(localStorage.getItem("dataquotes")) || [];
      const newData = { ...data, id: datalama.length + 1, like: 0 };
      const updatedata = [...datalama, newData];
      localStorage.setItem("dataquotes", JSON.stringify(updatedata));
      reset();
    }
  };
  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-white text-center text-4xl font-black  mt-5">
        Page Admin Quotes
      </h1>
      <div className="bg-white m-auto rounded-sm  p-17  ">
        <h1 className="my-2  mt-10 shadow rounded-2xl p-1 text-sm">
          🙎: hai 👋 Min KataKata Hari ini
        </h1>
        <p>{value}</p>
        <FormInput
          register={register}
          onsubmit={handleSubmit(onSubmitt)}
        ></FormInput>
      </div>
    </div>
  );
};

export default Admin;
