import { render, screen } from '@testing-library/react';
import Header from '../app/components/Header';
import '@testing-library/jest-dom/';

it("includes hello world", () => {
    render(<Header/>);
    const helloWorld = screen.getByText(/hello world/i);
    expect(helloWorld).toBeInTheDocument();
});