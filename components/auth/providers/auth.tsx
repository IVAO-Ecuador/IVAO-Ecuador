import { FC } from "react";
import { AuthProvider as InternalAuthProvider, AuthProviderProps } from "react-oidc-context";
import { OPENID_AUTHORITY, OPENID_CLIENT_ID, OPENID_REDIRECT_URI } from "../configuration";
import { WebStorageStateStore } from "oidc-client-ts";

const oidcConfig: AuthProviderProps = {
  authority: 'https://api.ivao.aero/',
  client_id: '57b2d957-38ff-4d1e-8d8f-7e5aa8d0d5fe',
  redirect_uri: 'http://localhost:3000/',
  scope: 'profile configuration',
  post_logout_redirect_uri: 'http://localhost:3000',
  metadataSeed: {
    end_session_endpoint: 'http://localhost:3000' // Redirect the user back to the main page after logout
  },
  // We are using Localstorage here instead of SessionStorage to persist the user session after tab closing
  userStore: new WebStorageStateStore({ store: window.localStorage }), 
  revokeTokensOnSignout: true, // Revoke tokens on logout
}

interface Props {
  children: JSX.Element
}

export const AuthProvider: FC<Props> = ({ children }) => {
  return <InternalAuthProvider {...oidcConfig}>{children}</InternalAuthProvider>;
}
