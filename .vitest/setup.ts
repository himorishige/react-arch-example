import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import 'jest-extended/all';
import { server } from '../src/test/server/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
