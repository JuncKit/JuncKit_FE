import { call } from './ApiService';

export function TestData() {
    return call('/demo', 'GET', null);
}
