import React from "react";
// eslint-disable-next-line no-unused-vars
import { render, screen } from "@testing-library/react";

import Hero from "./Hero";



it('renders welcome message', () => {
  render(<Hero />);
  expect(screen.getAllByText(/The Book of Boba Fett/i)).toBeInTheDocument();
});


//ships of the galaxy: naboo n1 start figther