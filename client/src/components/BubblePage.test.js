import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles';
import ColorList from './ColorList'

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const {rerender} = render(<BubblePage colorList= {[]} />)

  rerender(<BubblePage error='' colors={data} />)
  render(<ColorList colors={data}/>)
  const colorArr = screen.getAllByTestId(/colorList/i)
  expect(colorArr).toHaveLength(9)
});

const data = 
  [
    {
      color: 'limegreen',
      code: {
        hex: '#99ddbc'
      },
      id: 2
    },
    {
      color: 'aqua',
      code: {
        hex: '#00ffff'
      },
      id: 3
    },
    {
      color: 'aquamarine',
      code: {
        hex: '#7fffd4'
      },
      id: 4
    },
    {
      color: 'lilac',
      code: {
        hex: '#9a99dd'
      },
      id: 5
    },
    {
      color: 'softpink',
      code: {
        hex: '#dd99ba'
      },
      id: 6
    },
    {
      color: 'bisque',
      code: {
        hex: '#dd9a99'
      },
      id: 7
    },
    {
      color: 'softyellow',
      code: {
        hex: '#dcdd99'
      },
      id: 8
    },
    {
      color: 'blanchedalmond',
      code: {
        hex: '#ffebcd'
      },
      id: 9
    },
    {
      color: 'otherblue',
      code: {
        hex: '#8a2be3'
      },
      id: 11
    }
  ]

