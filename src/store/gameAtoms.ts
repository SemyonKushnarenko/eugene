import { atom } from 'jotai';

export const canPlayAtom = atom(true);

export const timeAtom = atom(-1);
export const roundsAtom = atom(3);
export const markAtom = atom<{ x: number; y: number } | null>(null);
export const mapSizeAtom = atom<{ width: number; height: number } | null>(null);
export const imageLoadedAtom = atom<boolean>(false);
export const panoramaLoadedAtom = atom<boolean>(false);
export const loadingGameAtom = atom<boolean>(true);
