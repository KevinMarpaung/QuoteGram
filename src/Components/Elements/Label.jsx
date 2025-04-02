const Label = ({ children, titleLabel }) => {
  return (
    <div>
      <label className="flex flex-col">
        {titleLabel}
        {children}
      </label>
    </div>
  );
};

export default Label;
