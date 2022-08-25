import { Button } from 'src/components/Button';

type Props = {
  count: number;
  addCount: () => void;
  resetCount: () => void;
};

export const GrandChildComponent: React.FC<Props> = (props) => {
  const { count, addCount, resetCount } = props;

  return (
    <div>
      <p className="mb-2 font-bold">count: {count}</p>
      <div className="flex gap-2">
        <Button variant="primary" countHandler={addCount}>
          + 1
        </Button>
        <Button variant="secondary" countHandler={resetCount}>
          Reset
        </Button>
      </div>
    </div>
  );
};
