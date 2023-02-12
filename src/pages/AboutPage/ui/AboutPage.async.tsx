import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // todo For the test. Delete later.
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));
