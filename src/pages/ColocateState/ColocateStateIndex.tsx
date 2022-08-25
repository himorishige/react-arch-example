import { Link } from '@tanstack/react-location';

export const ColocateStateIndex: React.VFC = () => {
  return (
    <div className="p-2">
      <h2 className="mb-2 text-base font-semibold uppercase tracking-wide text-blue-600">
        Colocate State Index
      </h2>
      <ul>
        <li>
          <Link to="state1" className="underline">
            State 1 Leave it.
          </Link>
        </li>
        <li>
          <Link to="state1" className="underline">
            State 2 Colocate state.
          </Link>
        </li>
        <li>
          <Link to="state1" className="underline">
            State 3 Lift state.
          </Link>
        </li>
        <li>
          <Link to="state1" className="underline">
            State 4 Use Component Composition.
          </Link>
        </li>
        <li>
          <Link to="state1" className="underline">
            State 5 Move State to Context Provider.
          </Link>
        </li>
      </ul>
    </div>
  );
};
