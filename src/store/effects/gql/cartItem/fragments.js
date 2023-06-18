import gql from 'graphql-tag';

export const cartItemFragment = gql`{
  id
  name
	description
	quantity
	discountType
	discountAmount
	priceEach
	subtotal
	tax
	total
	discount
	delivery
	shipping
	isReviewed
	rating
	sortOrder
}`
