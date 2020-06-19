// @flow

export type FcmConfigType = {
  configuration: {
    messagingSenderId: string,
    projectId: string,
    apiKey: string,
    appId: string,
  },
  publicVapidKey: string,
};

export type TenantType = {|
  apiEndpoint: string,
  appName: string,
  graphEndpoint: string,
  identityEndpoint: string,
  passwordResetEndpoint: string,
  serviceEndpoint: string,
  themeName: string,
  tenantStage: string,
  supportEmail: string,
  bucket: {
    name: string,
    region: 'eu-west-1' | 'eu-west-2',
  },
  fcm: FcmConfigType,
  deviceProfile: ?'tempo' | 'moments',
|};
