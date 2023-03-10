export interface AuthPayload {
  token: string;
  user: User;
  verificationCode: string;
}

export interface User {
  id: string;
  needToUpgrade: string;
  balance: number;
  timezoneOffset: number;
  timezone: string;
  chatId: string;
  playerId: string;
  username: string;
  fullName: string | null;
}

export interface UserSubscriptionPayload {
  node: User;
}

export interface EventDay {
  id: string;
  name: string;
  description?: string;
  avatar?: string;
}

export interface Creator {
  id: string;
  name: string;
}
export interface Member {
  id: string;
  name: string;
  caption: string;
  description: string;
  source: string;
  creators: Array<Creator>;
}

export interface MemberContainer {
  id: string;
  sortOrder: number,
  member: Member;
}

export interface MediaCollection {
  id: string;
  name: string;
  type: string;
  members: Array<MemberContainer>;
}

export interface PlayerMediaInfo {
  mediaId: string;
  title: string;
  subtitle: string;
  isVideo: boolean;
  mediaUrl: string;
  coverImage?: string;
}

export interface IRoundInfo {
  duration?: string;
  beforeDuration?: string;
  roundTitle?: string;
}

export interface IEventInfo {
  title?: string;
  startDate?: Date;
  email: string;
  name: string;
}