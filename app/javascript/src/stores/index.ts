import { derived, writable } from 'svelte/store';
import type { WalletAdapter } from '../helpers/types';

export type Adapter = WalletAdapter | undefined;

/** wallet adapter  */
export const adapter = writable<Adapter>(undefined);

/** wallet connected? */
export const connected = derived(adapter, ($adapter) => {
  if ($adapter && $adapter.publicKey) {
    return true;
  }
  return false;
});

export const solanaNetwork = writable<string>('https://api.mainnet-beta.solana.com');
