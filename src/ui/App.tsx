import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import ConfigurationUpload from './ConfigurationUpload';


const container = document.getElementById("root");
const root = createRoot(container);


root.render(<Fragment>
<ConfigurationUpload></ConfigurationUpload>
</Fragment>);