import { render } from '@testing-library/react';

import { Identicon } from '../components/Icons';

it('renders mike identicon correctly', () => {
  const { container } = render(<Identicon id="mike" />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <svg
      fill="rgb(25,104,230)"
      height="1em"
      shape-rendering="crispEdges"
      viewBox="0 0 5 5"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="rgba(140,140,140,0.2)"
        height="100%"
        width="100%"
      />
      <rect
        height="1"
        width="1"
        x="2"
        y="1"
      />
      <rect
        height="1"
        width="1"
        x="2"
        y="2"
      />
      <rect
        height="1"
        width="1"
        x="2"
        y="3"
      />
      <rect
        height="1"
        width="1"
        x="2"
        y="4"
      />
      <rect
        height="1"
        width="1"
        x="1"
        y="0"
      />
      <rect
        height="1"
        width="1"
        x="3"
        y="0"
      />
      <rect
        height="1"
        width="1"
        x="1"
        y="3"
      />
      <rect
        height="1"
        width="1"
        x="3"
        y="3"
      />
      <rect
        height="1"
        width="1"
        x="0"
        y="0"
      />
      <rect
        height="1"
        width="1"
        x="4"
        y="0"
      />
      <rect
        height="1"
        width="1"
        x="0"
        y="4"
      />
      <rect
        height="1"
        width="1"
        x="4"
        y="4"
      />
    </svg>
  `);
});

it('renders Mike identicon correctly', () => {
  const { container } = render(<Identicon id="Mike" />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <svg
      fill="rgb(207,230,25)"
      height="1em"
      shape-rendering="crispEdges"
      viewBox="0 0 5 5"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="rgba(140,140,140,0.2)"
        height="100%"
        width="100%"
      />
      <rect
        height="1"
        width="1"
        x="2"
        y="0"
      />
      <rect
        height="1"
        width="1"
        x="2"
        y="1"
      />
      <rect
        height="1"
        width="1"
        x="2"
        y="2"
      />
      <rect
        height="1"
        width="1"
        x="2"
        y="3"
      />
      <rect
        height="1"
        width="1"
        x="1"
        y="0"
      />
      <rect
        height="1"
        width="1"
        x="3"
        y="0"
      />
      <rect
        height="1"
        width="1"
        x="1"
        y="2"
      />
      <rect
        height="1"
        width="1"
        x="3"
        y="2"
      />
      <rect
        height="1"
        width="1"
        x="0"
        y="1"
      />
      <rect
        height="1"
        width="1"
        x="4"
        y="1"
      />
      <rect
        height="1"
        width="1"
        x="0"
        y="2"
      />
      <rect
        height="1"
        width="1"
        x="4"
        y="2"
      />
      <rect
        height="1"
        width="1"
        x="0"
        y="3"
      />
      <rect
        height="1"
        width="1"
        x="4"
        y="3"
      />
      <rect
        height="1"
        width="1"
        x="0"
        y="4"
      />
      <rect
        height="1"
        width="1"
        x="4"
        y="4"
      />
    </svg>
  `);
});
