import { FormatCreateDatePipe } from './format-create-date.pipe';

describe('FormatCreateDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatCreateDatePipe();
    expect(pipe).toBeTruthy();
  });
});
