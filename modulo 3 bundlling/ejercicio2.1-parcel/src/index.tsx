import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelloComponent } from './hello';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<HelloComponent />);