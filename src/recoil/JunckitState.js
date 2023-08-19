import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const MapState = atom({
    key: 'MapState',
    default: 0,
});
