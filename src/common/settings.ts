export interface LbrySettings {
  enabled: boolean
  redirect: keyof typeof redirectDomains
}

export const DEFAULT_SETTINGS: LbrySettings = { enabled: true, redirect: 'lbry.tv' };

export const redirectDomains = {
  'lbry.tv': { prefix: 'https://lbry.tv/', display: 'lbry.tv' },
  odysee: { prefix: 'https://odysee.com/', display: 'odysee' },
  app: { prefix: 'lbry://', display: 'App' },
};

export function getSettingsAsync<K extends Array<keyof LbrySettings>>(...keys: K): Promise<Pick<LbrySettings, K[number]>> {
  return new Promise(resolve => chrome.storage.local.get(keys, o => resolve(o as any)));
}
