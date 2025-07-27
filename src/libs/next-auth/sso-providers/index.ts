import { auth0 } from './auth0';
import { authelia } from './authelia';
import { authentik } from './authentik';
import { azureAD } from './azure-ad';
import { bypass } from './bypass';
import { casdoor } from './casdoor';
import { cloudflareZeroTrust } from './cloudflare-zero-trust';
import { cognito } from './cognito';
import { genericOIDC } from './generic-oidc';
import { github } from './github';
import { google } from './google';
import { keycloak } from './keycloak';
import { logto } from './logto';
import { microsoftEntraID } from './microsoft-entra-id';
import { wechat } from './wechat';
import { zitadel } from './zitadel';

const ssoProviders: Record<string, any> = {
  'auth0': auth0,
  'authentik': authentik,
  'azure-ad': azureAD,
  'generic-oidc': genericOIDC,
  'github': github,
  'zitadel': zitadel,
  'authelia': authelia,
  'logto': logto,
  'cloudflare-zero-trust': cloudflareZeroTrust,
  'casdoor': casdoor,
  'microsoft-entra-id': microsoftEntraID,
  'wechat': wechat,
  'keycloak': keycloak,
  'google': google,
  'cognito': cognito,
};

if (process.env.NODE_ENV === 'development') {
  ssoProviders['bypass'] = bypass;
}

export { ssoProviders };
