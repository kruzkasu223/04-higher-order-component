import { WithUserData, WithUserDataProps } from "./WithUserData"

export interface UserProps {}

export const User = ({ loading, user }: UserProps & WithUserDataProps) => {
  console.log("props", loading, user)
  return (
    <div>
      <p>UserName</p>
      <p>email</p>
      <p>phone</p>
    </div>
  )
}

export const UserWithData = WithUserData<UserProps>(User)
