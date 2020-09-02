# use-state-with-effect

Attach effect callbacks to `useState` updates.

# Motivation

Sometimes you have some related code that should run in parallel with your state updates. While `useEffect` is the default way to achieve this, it does involve some ceremony, and may also hinder colocation.

`use-state-with-effect` solves this by exposing a simple function, `withEffect`. This function merely takes the result returned from `useState` and a callback function, and then wraps wraps the update function with the provided effect.

# Usage

Getting started is quick and simple!

```bash
npm install use-state-with-effect
```

Then, in your component:

```tsx
import { withState } from 'use-state-with-effect';

const MyComponent = () => {
  const [state, setState] = withEffect(useState(), (prevValue, newValue) => {
    console.log({ prevValue, newValue });
  });
};
```
