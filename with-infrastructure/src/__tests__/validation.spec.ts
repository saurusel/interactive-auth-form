import { describe, it, expect } from 'vitest';
import { isValid } from '../validation';

describe('isValid', () => {
  it('accepts correct creds', () => {
    expect(isValid('user@example.com', 'password')).toBe(true);
  });
  it('rejects wrong creds', () => {
    expect(isValid('foo', 'bar')).toBe(false);
  });
});
