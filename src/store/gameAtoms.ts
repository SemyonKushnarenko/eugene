import { IGame } from "../helpers/games";
import { atom } from "jotai";

export const canPlayAtom = atom<boolean>(true);

export const timeAtom = atom<number>(-1);

export const roundsAtom = atom<number>(3);
export const currentRoundAtom = atom<number>(1);
export const isFinishAtom = atom<boolean>(
  (get) => get(roundsAtom) === get(currentRoundAtom)
);

export const currentGameAtom = atom<IGame | null>(null);

export const markAtom = atom<{ x: number; y: number } | null>(null);
export const mapSizeAtom = atom<{ width: number; height: number } | null>(null);
export const imageLoadedAtom = atom<boolean>(false);
export const panoramaLoadedAtom = atom<boolean>(false);
export const loadingGameAtom = atom<boolean>(true);
