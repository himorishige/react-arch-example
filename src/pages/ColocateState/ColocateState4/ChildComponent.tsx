type Props = {
  component: React.ReactNode;
};

export const ChildComponent: React.FC<Props> = (props) => {
  const { component } = props;
  return <>{component}</>;
};
