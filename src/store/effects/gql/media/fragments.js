import gql from 'graphql-tag';

export const mediaFragment = gql`{
  id
  name
	nameLower
	caption
	description
	avatar
	source
	impressions
}`
