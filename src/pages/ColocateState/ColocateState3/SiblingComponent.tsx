import { Button } from 'src/components/Button';

type Props = {
  count: number;
  addCount: () => void;
  resetCount: () => void;
};

export const SiblingComponent: React.FC<Props> = (props) => {
  const { count, addCount, resetCount } = props;

  return (
    <div className="p-2">
      <h2 className="mb-2 text-base font-semibold uppercase tracking-wide text-blue-600">
        Sibling Component
      </h2>
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
    </div>
  );
};
