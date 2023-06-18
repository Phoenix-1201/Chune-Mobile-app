import gql from 'graphql-tag';

export const cartFragment = gql`{
  id
  subtotal
	tipPercentage
	tip
	tax
	total
	discount
	delivery
	shipping
	isPending
}`
