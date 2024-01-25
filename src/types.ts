export interface AppInfo {
    appId: string;
    appName: string;
}

export interface AppConfig extends AppInfo {
    masterKey: string;
    serverURL: string;
}

export interface AppConfigCollection {
    apps: AppConfig[];
}