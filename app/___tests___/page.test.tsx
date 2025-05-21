import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../page';

describe('Home Component', () => {
	it('renders the welcome heading', () => {
		render(<Home />);
		expect(screen.getByLabelText('home-container')).toBeInTheDocument();
	});
});
