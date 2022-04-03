import { atom } from 'recoil';

export const currentMenuNo = atom({
  key: 'currentMenuNo',
  default: 0,
});

export const deposit = atom({
  key: 'deposit',
  default: 0,
});

export const monthFee = atom({
  key: 'monthFee',
  default: 0,
});

export const rate = atom({
  key: 'rate',
  default: 0.06,
});

export const limit = atom({
  key: 'limit',
  default: 0.6,
});
