import { createContext } from 'react';

const navContext = createContext({ clicked: false, value: false, valueHandler: () => {} });

export default navContext;