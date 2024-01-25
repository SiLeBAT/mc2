import { useState } from 'react';
import { AppInfo } from '../types';

function ConfigurationUpload() {

  const [appArray, setAppArray] = useState<AppInfo[]>([])

  const handleUploadClick = async () => {
    const retrievedApps = await window.api.uploadConfig();
    setAppArray(retrievedApps);
  };



  return (
    <div>
      {appArray.length === 0 ?
      <h3>There are currently no app configurations loaded.  Please upload a configuration.json file.</h3>
      :
      appArray.map(app => <div key="app">{app.appId} - {app.appName}</div>)}
              <button onClick={handleUploadClick}>
      { 'Click to select'}
    </button>

    </div>
  );
}

export default ConfigurationUpload;