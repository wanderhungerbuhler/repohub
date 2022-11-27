import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, vi } from "vitest";

import Button from './';

const buttonTestID = "button";

describe('Verify components Button', () => {

  test('Should be able to render the Button', () => {
    const { getByTestId } = render(<Button>Search</Button>);
    expect(getByTestId(buttonTestID)).toBeInTheDocument();
  });

  test('Should be able to render based on the children prop', () => {
    const { getByTestId } = render(<Button>Search</Button>);
    expect(getByTestId(buttonTestID)).toHaveTextContent("Search");
  });

  test('Should be able to fire event', () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(<Button onClick={handleClick}>Search</Button>);
    fireEvent.click(getByTestId(buttonTestID));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Should be able to have default style', () => {

    const { getByTestId } = render(<Button>Search</Button>);

    expect(getByTestId(buttonTestID)).toHaveStyle({
      borderRadius: "4px",
      border: "none",
      fontWeight: "bold",
      textTransform: "uppercase",
      outline: "none",
      cursor: "pointer",
      background: "#00b5b4",
      color: "#121212",
      transition: "all .2s ease-in-out",
    });

  });
})
