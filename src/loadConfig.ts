import { dialog } from 'electron';
import * as fs from 'fs/promises';
import { getConfigurations, saveConfiguration } from './safeStorage';
import { AppConfig, AppConfigCollection, AppInfo } from './types';


async function handleLoadConfig(): Promise<AppInfo[]> {
    const { canceled, filePaths } = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: 'JSON', extensions: ['json'] },
        ]
    })
    if (!canceled) {
        const data = await fs.readFile(filePaths[0], 'utf-8');
        const config: AppConfigCollection = JSON.parse(data);
        config.apps.forEach((appConfig: AppConfig) => {
            saveConfiguration(appConfig);
        });
        const configs = getConfigurations();
        return configs.map(c => ({ appId: c.appId, appName: c.appName }));
    }
}

export {
    handleLoadConfig
};
