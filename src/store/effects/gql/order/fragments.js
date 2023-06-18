import gql from 'graphql-tag';

export const orderFragment = gql`{
  id
  subtotal
	tipPercentage
	tip
	tax
	total
	discount
	delivery
	shipping
	sortOrder
	useWallet
	isEvent
	isCancelledByCustomer
	isCancelledByOperator
	isArchived
	isPaid
	isDelivered
	isDelivery
	isReturned
	isReadyForDelivery
	isOnTheWay
	isBeingPrepared
	isReviewed
	notes
	studentName
}`
