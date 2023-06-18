export const Site = `
{
  id
  name
  description
  slug
  address
  address2
  city
  state
  postalCode
  country
  gps {
    id
    lat
    lon
  }
  googlePlacesId
}
`;

export const PaymentMethod = `
{
  id
  type
  methodType
  cardType
  token
  last4
  isValid
  isDefault
  image
  expirationDate
  createdDate
}
`;

export const User = `
{
  id
  needToUpgrade
  balance
  timezoneOffset
  timezone
  chatId
  playerId
  username
  email
  fullName
  site${Site}
  title
  avatar
  unreadNotifications
  braintreeCustomerId
  paymentMethods${PaymentMethod}
  firstName
  middleName
  lastName
  dateOfBirth
  gender
}
`;

export const AuthPayLoad = `
{
  token
  user${User}
  verificationCode
}
`;

export const EventDay = `
{
  id
  name
  description
}
`;
