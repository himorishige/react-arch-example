type ButtonProps = {
  children: React.ReactNode;
  countHandler: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button: React.VFC<ButtonProps> = (props) => {
  const { children, countHandler, variant = 'primary' } = props;

  return (
    <button
      onClick={countHandler}
      type="button"
      className={
        variant === 'primary'
          ? 'py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded'
          : 'py-2 px-4 font-semibold text-blue-500 hover:text-white bg-transparent hover:bg-blue-500 rounded border border-blue-500 hover:border-transparent'
      }
    >
      {children}
    </button>
  );
};
