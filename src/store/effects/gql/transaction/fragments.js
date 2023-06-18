import gql from 'graphql-tag';

export const transactionFragment = gql`{
  id
  paymentMethodToken
	amountPaid
	transactionId
	walletAmount
	note
}`
