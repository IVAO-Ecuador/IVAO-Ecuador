import type { NextAuthOptions, TokenSet } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "ivao",
      name: "IVAO Provider",
      type: "oauth",
      wellKnown: process.env.IVAO_WELL_KNOWN as string,
      idToken: true,
      client: {
        authorization_signed_response_alg: "RS512",
        id_token_signed_response_alg: "RS512",
      },
      checks: ["nonce"],
      clientId: process.env.IVAO_CLIENT_ID as string,
      clientSecret: process.env.IVAO_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: process.env.OAUTH_SCOPES?.split(",").join(" "),
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.email,
          name: profile.given_name,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
