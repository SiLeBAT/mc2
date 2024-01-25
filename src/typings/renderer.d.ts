import { AppInfo } from '../types';

export interface IElectronAPI {
    uploadConfig: () => Promise<AppInfo[]>,
}

declare global {
    interface Window {
        api: IElectronAPI
    }
}

