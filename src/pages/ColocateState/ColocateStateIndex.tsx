import { Link } from '@tanstack/react-location';

export const ColocateStateIndex: React.VFC = () => {
  return (
    <div className="p-2">
      <h2 className="mb-2 text-base font-semibold tracking-wide text-blue-600 uppercase">
        Colocate State Index
      </h2>
      <ul>
        <li>
          <Link to="state1" className="underline">
            State 1
          </Link>
        </li>
        <li>
          <Link to="state1" className="underline">
            State 2
          </Link>
        </li>
        <li>
          <Link to="state1" className="underline">
            State 3
          </Link>
        </li>
        <li>
          <Link to="state1" className="underline">
            State 4
          </Link>
        </li>
        <li>
          <Link to="state1" className="underline">
            State 5
          </Link>
        </li>
      </ul>
    </div>
  );
};
