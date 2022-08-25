import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import 'jest-extended/all';
import { server } from '../src/test/server/server';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
