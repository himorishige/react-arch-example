type Props = {
  component: React.ReactNode;
};

export const ChildComponent: React.VFC<Props> = (props) => {
  const { component } = props;
  return <>{component}</>;
};
