import React from 'react';

type SetStateEffect = <S>(prevState: S, newState: S) => void;

export const withEffect = <S>(
  tuple: [S, React.Dispatch<React.SetStateAction<S>>],
  effect: SetStateEffect
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, _setState] = tuple;

  const setState: React.Dispatch<React.SetStateAction<S>> = value => {
    // @ts-ignore
    const newValue = typeof value === 'function' ? value(state) : value;
    effect(state, newValue);
    _setState(newValue);
  };

  return [state, setState];
};
