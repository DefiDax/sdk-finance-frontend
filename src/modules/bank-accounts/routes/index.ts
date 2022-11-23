import { AsyncComponent } from 'vue';

import { ROLES } from '@/constants';
import { IRouteConfig } from '@/types/interfaces';

const BankAccounts: AsyncComponent = () => import(
  /* webpackChunkName: 'bank-accounts' */ '@/modules/bank-accounts/pages/bank-accounts.vue'
);

export const BANK_ACCOUNTS: IRouteConfig = {
  path: '/dashboard/bank-accounts.vue',
  name: 'Bank-accounts',
  component: BankAccounts,
  meta: {
    permission: [
      ROLES.compliance_manager,
    ],
    translation: 'navigation.link.bank_accounts',
    root: true,
    icon: 'icon-issuers',
  },
};
