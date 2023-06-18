import gql from 'graphql-tag';

export const mediaCollectionFragment = gql`{
  id
  name
	nameLower
	description
	subCollection {
		id
		name
		nameLower
		description
		subCollection {
			id
			name
			nameLower
			description
			createdAt
			updatedAt
		}
		members {
			id
			member {
				name
				nameLower
				caption
				description
				avatar
				source
				impressions
			}
			sortOrder
			createdAt
			updatedAt
		}
		createdAt
		updatedAt
	}
	members {
		sortOrder
		createdAt
		updatedAt
		id
	}
	user {
		id
		email
		fullName
		title
		middleName
		lastName
		username
		firstName
		gender
		dateOfBirth
	}
}`
