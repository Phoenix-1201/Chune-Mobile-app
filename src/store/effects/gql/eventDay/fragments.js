import gql from 'graphql-tag';

export const eventDayFragment = gql`{
  id
  name
	description
	avatar
	maxBudgetPer
	sortOrder
	hasLiveStream
	hasAlcohol
	isLocked
	isCancelled
	isPostponed
}`
