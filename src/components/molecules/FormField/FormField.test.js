import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import FormField from './FormField';

describe('Form Field', () => {
  it('Renders the compoent', () => {
    renderWithProviders(<FormField label="label" name="name" id="name" />);
  });
});
