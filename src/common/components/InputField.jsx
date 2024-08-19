import React from "react";

function InputField({ type, label, placeholder }) {
  return (
    <>
      <label className="block mb-2.5 text-neutral font-medium">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        className="block w-full mb-4 flex-auto rounded-md border-[1.5px] border-[#35373B] placeholder-placeholder bg-transparent px-3.5 py-2 text-white focus:outline-primary focus:ring-2  focus:ring-light focus:ring-offset-1.5 sm:text-sm sm:leading-6 duration-75"
      />
    </>
  );
}

export default InputField;
