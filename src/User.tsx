import { WithUserData, WithUserDataProps } from "./WithUserData"

export interface UserProps {}

export const User = ({ loading, user }: UserProps & WithUserDataProps) => {
  console.log("props", loading, user)
  return (
    <div className="user">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>
            {user?.name.title}. {user?.name.first} {user?.name.last}
          </h2>
          <div className="user_data">
            <div className="user_data_item">
              <span>Username: </span>
              <span>{user?.login.username}</span>
            </div>
            <div className="user_data_item">
              <span>Email: </span>
              <span>{user?.email}</span>
            </div>
            <div className="user_data_item">
              <span>Gender: </span>
              <span>{user?.gender}</span>
            </div>
            <div className="user_data_item">
              <span>DOB: </span>
              <span>
                {new Date(user?.dob?.date || "").toLocaleDateString()} (
                {user?.dob?.age} yrs old)
              </span>
            </div>
            <div className="user_data_item">
              <span>Address: </span>
              <span>
                {user?.location?.street.number}, {user?.location?.street.name},{" "}
                {user?.location?.city}, {user?.location?.state},{" "}
                {user?.location?.country} - {user?.location?.postcode}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export const UserWithData = WithUserData<UserProps>(User)
