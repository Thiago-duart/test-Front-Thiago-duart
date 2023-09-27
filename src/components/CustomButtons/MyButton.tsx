interface props {
  children: string;
  styleButton: string;
  rest: any;
}
export const MyButton = ({ children, styleButton, ...rest }: props) => {
  return (
    <button className={styleButton} {...rest}>
      {children}
    </button>
  );
};
