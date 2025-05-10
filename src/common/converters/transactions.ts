import { ProductType, TransactionPaymentItemDetails } from 'ors-api/ors2';
import { RegistrationDto as RegistrationDtoIol, TransactionDto } from 'ors-api/iol';

import { ExtendedTransactionPaymentDetails } from 'store/payments';
import i18next from '../i18n';
import { RegistrationDto as RegistrationDtoMod } from 'ors-api/mod';
import { isExamInPast } from './registration';

const paymentDescription = {
  toDescription: () => ({
    fromProductType: (type: ProductType): string => {
      switch (type) {
        case ProductType.Transfer:
          return i18next.t('APPB2C.registration.payments.transaction.description.transfer');
        case ProductType.EnquiryOnResults:
          return i18next.t('APPB2C.registration.payments.transaction.description.eor');
        case ProductType.Appeal:
          return i18next.t('APPB2C.registration.payments.transaction.description.appeal');

        default:
          return i18next.t('APPB2C.registration.payments.transaction.description.registration');
      }
    },
  }),
};

export const transactions = {
  toUnifiedTransactions: () => ({
    fromIcUkviTransactions: (
      transactions: ExtendedTransactionPaymentDetails[],
      reg?: Partial<RegistrationDtoMod>
    ) => {
      const uniTrans: ExtendedTransactionPaymentDetails[] = transactions.map(
        (t) =>
          ({
            ...t,
            examInPast: isExamInPast([reg?.lrwExam?.examDate || '', reg?.speakingExam?.date || '']),
            description: paymentDescription.toDescription().fromProductType(t.productType),
            items: t.items?.map(
              (item) =>
                ({
                  ...item,
                  description: paymentDescription.toDescription().fromProductType(item.productType),
                } as TransactionPaymentItemDetails)
            ),
          } as ExtendedTransactionPaymentDetails)
      );
      return uniTrans;
    },
    fromIolTransactions: (transactions: TransactionDto[], reg?: Partial<RegistrationDtoIol>) => {
      const uniTrans: ExtendedTransactionPaymentDetails[] = transactions.map(
        (t) =>
          ({
            ...t,
            examInPast: isExamInPast(
              [reg?.lrwSession?.endDateTime || '', reg?.lrwSession?.startDateTime || ''],
              reg?.timeZoneId
            ),
            description: paymentDescription.toDescription().fromProductType(t.productType),
            items: t.items?.map(
              (item) =>
                ({
                  ...item,
                  description: paymentDescription.toDescription().fromProductType(item.productType),
                } as TransactionPaymentItemDetails)
            ),
            paymentDeadline: t.paymentAttempt?.paymentDeadline,
          } as ExtendedTransactionPaymentDetails)
      );
      return uniTrans;
    },
  }),
};
