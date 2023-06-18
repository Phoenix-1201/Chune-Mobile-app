import gql from 'graphql-tag';

export const notificationFragment = gql`{
  id
  title
	description
	toAll
	rating
	read
}`
