import { z } from "zod";

export enum WalletType {
  none = "none",
  albedo = "albedo",
  walletConnect = "walletConnect",
  frieghter = "frieghter",
  xBull = "xBull",
  rabet = "rabet",
  facebook = "facebook",
  google = "google",
  emailPass = "emailPass",
  isAdmin = "isAdmin",
  apple = "apple",
}

export const albedoSchema = z.object({
  walletType: z.literal(WalletType.albedo),
  pubkey: z.string(),
  signature: z.string(),
  token: z.string(),
});

const emailPassSchema = z.object({
  walletType: z.literal(WalletType.emailPass),
  email: z.string(),
  password: z.string(),
});

export const walleteAuthSchema = z.object({
  walletType: z.union([
    z.literal(WalletType.frieghter),
    z.literal(WalletType.rabet),
    z.literal(WalletType.walletConnect),
  ]),
  pubkey: z.string(),
  signedXDR: z.string(),
});

export const providerAuthShema = z.object({
  email: z.string(),
  token: z.string(),
  walletType: z.union([
    z.literal(WalletType.google),
    z.literal(WalletType.facebook),
  ]),
});

export const appleAuthSchema = z.object({
  walletType: z.literal(WalletType.apple),
  appleUid: z.string().optional(),
  token: z.string().optional(),
  email: z.string().optional(),

  appleToken: z.string().optional(),
});

export const authCredentialSchema = z.union([
  albedoSchema,
  emailPassSchema,
  providerAuthShema,
  walleteAuthSchema,
  appleAuthSchema,
]);

export type AuthCredentialType = z.infer<typeof authCredentialSchema>;
