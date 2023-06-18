import { gql } from 'overmind-graphql';

export const userFragment = gql`{
  id
  firstName
  firstNameLower
  middleName
  middleNameLower
  lastName
  lastNameLower
  fullName
  fullNameLower
  dateOfBirth
  email
  gender
  balance
  createdAt
  updatedAt
}`;