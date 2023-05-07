import { sdk } from './appwrite';
import { writable } from 'svelte/store';


const createState = () => {
  const { subscribe, set, update } = writable({
    account: null,
    alert: null,
  });

  return {
    subscribe,
    signup: async (email: string, password: string, name: string) => {
      return await sdk.account.create('unique()', email, password, name);
    },
    login: async (userId: string, secret: string) => {
      await sdk.account.updateMagicURLSession(userId, secret);
      const user = await sdk.account.get();
      state.init(user);
    },
    logout: async () => {
      await sdk.account.deleteSession('current');
    },
    alert: async (alert: any) =>
      update((n) => {
        n.alert = alert;
        return n;
      }),
    init: async (account: null | any = null) => {
      return set({ account, alert: null });
    },
  };
};

export const state = createState();
