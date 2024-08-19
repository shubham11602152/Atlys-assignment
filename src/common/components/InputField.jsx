function InputField({
  type,
  label,
  placeholder,
  inputClassName,
  labelClassName,
}) {
  return (
    <>
      {label && (
        <label
          className={`block mb-2.5 text-neutral font-medium text-sm ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        type={type}
        className={`input block w-full flex-auto rounded-md border-[1.5px] border-[#35373B] text-md placeholder-placeholder bg-transparent px-3.5 py-2 text-white focus:outline-primary focus:ring-2  focus:ring-light focus:ring-offset-1.5 sm:leading-6 duration-75 ${inputClassName}`}
      />
    </>
  );
}

export default InputField;
