import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, vi } from "vitest";

import { Input } from "./styles";

describe('Verify components Input in Home', () => {

  beforeEach(() => {
    render(<Input placeholder="Enter a repository here..." />);
  });

  test('Should be able to render the Input', () => {
    expect(screen.getByPlaceholderText("Enter a repository here...")).toBeInTheDocument();
  });
})
