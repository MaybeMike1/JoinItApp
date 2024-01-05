import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type AuthenticationRequestDto = {
  email: string;
  password: string;
};

export type AuthenticationResponseDto = {
  statusCode: number;
  email: string;
  message: string;
  guid: string;
  token: string;
};

export type MetaRequestDto = {
  metaUserId: string;
  metaUserFullName: string;
}

export type UpdateUserPasswordDto = {
    currentPassword : string;
    newPassword : string;
}

export type UpdateUserResponseDto = {
    statusCode : number;
    message : string;
    user : any;
}

export type FieldValueType = 'email' | 'password'

export type User = FacebookUser;

type FacebookUser = {
  id: string;
  name : string;
  photoUrl : string;
}

export type ActivityDto = {
  activityGuid : string;
  activityName : string;
  location: string;
  activityType : string;
  activityTypeDescription: string;
  friendlyStartDate: string;
  attendants: Array<string>;
}


type TabParamList = {
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Activity: undefined;
  Settings: undefined;
  ActivityDetail: ActivityDto | undefined;
 };
 
 type RootStackParamList = {
  // other routes...
  ActivityDetail: { activity: ActivityDto };
 };

export type LoginScreenProps = BottomTabScreenProps<TabParamList, 'Login'>;
export type RegisterScreenProps = BottomTabScreenProps<TabParamList, 'Register'>;
export type ProfileScreenProps = BottomTabScreenProps<TabParamList, 'Profile'>;
export type ActivityScreenProps = BottomTabScreenProps<TabParamList, 'Activity'>;
export type SettingsScreenProps = BottomTabScreenProps<TabParamList, 'Settings'>;

export type ActivityEnrollmentParams = {
  userGuid: string;
  activityGuid : string;
}

export interface EnrollmentButtonProps {
  activityGuid: string;
}

export interface AttendanceListProps {
  attendance: string[];
}

export type ActivityResponseDto = {
activities: ActivityDto[];
newActivity: ActivityDto;
statusCode: number;
message: string;
}

export interface ActivityListProps {
  activityResponseDto: ActivityResponseDto;
  isLoading: boolean;
}

export type CardProps = {
  T: any;
  isLoading: boolean;
};
type DatabaseUser = {
  
}