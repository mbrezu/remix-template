import { render, screen } from '@testing-library/react';
import Header from '../app/components/Header';
import '@testing-library/jest-dom/';
import { createRemixStub } from "@remix-run/testing";

it("includes hello world", () => {
    let RemixStub = createRemixStub([
        {
            path: "/",
            Component: Header,
        }
    ]);

    render(<RemixStub />);
    const helloWorld = screen.getByText(/hello world/i);
    expect(helloWorld).toBeInTheDocument();
});