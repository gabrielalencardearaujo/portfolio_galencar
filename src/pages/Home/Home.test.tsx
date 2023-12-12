import { render } from '@testing-library/react';
import Home from './Home';
import {describe, it} from 'vitest';

describe('<Home />', () => {
  it('describe for the test', () => {
    render(<Home />);
  })
})