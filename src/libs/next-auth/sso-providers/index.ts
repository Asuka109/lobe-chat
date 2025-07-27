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
  [auth0.id]: auth0,
  [authentik.id]: authentik,
  [azureAD.id]: azureAD,
  [genericOIDC.id]: genericOIDC,
  [github.id]: github,
  [zitadel.id]: zitadel,
  [authelia.id]: authelia,
  [logto.id]: logto,
  [cloudflareZeroTrust.id]: cloudflareZeroTrust,
  [casdoor.id]: casdoor,
  [microsoftEntraID.id]: microsoftEntraID,
  [wechat.id]: wechat,
  [keycloak.id]: keycloak,
  [google.id]: google,
  [cognito.id]: cognito,
};

if (process.env.NODE_ENV === 'development') {
  ssoProviders[bypass.id] = bypass;
}

export { ssoProviders };
