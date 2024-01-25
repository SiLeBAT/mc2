import { safeStorage } from 'electron';
import Store from 'electron-store';
import { AppConfig } from './types';

const store = new Store<Record<string, AppConfig>>({
    name: 'configStore',
    watch: true,
    encryptionKey: 'magic_unbreakable_encryption',
});

//TODO Stringify and encrypt entire JSON
function saveConfiguration(configuration: AppConfig) {
    const encMaster = safeStorage.encryptString(configuration.masterKey);
    store.set(configuration.appId, {
        appId: configuration.appId,
        masterKey: encMaster.toString('latin1'),
        appName: configuration.appName,
        serverURL: configuration.serverURL,
    });
}

function deleteConfiguration(key: string) {
    store.delete(key);
}

function getConfigurations(): Array<AppConfig> {
    return Object.entries(store.store).reduce((configurations, [id, config]) => {
        return [...configurations, {
            appId: config.appId,
            masterKey: safeStorage.decryptString(Buffer.from(config.masterKey, 'latin1')),
            appName: config.appName,
            serverURL: config.serverURL,
        }];
    }, [] as Array<AppConfig>);
}

export {
    deleteConfiguration,
    getConfigurations, saveConfiguration
};

