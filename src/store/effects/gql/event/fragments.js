import gql from 'graphql-tag';

export const eventFragment = gql`{
  id
  name
	description
	isLocked
	isCancelled
	isPostponed
	avatar
	shareCount
	likeCount
	maxBudgetPer
}`
