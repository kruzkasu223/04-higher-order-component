import { ComponentType } from "react"
import { User, UserResponse } from "./types"
import { useFetch } from "./useFetch"

const API_URL = "https://randomuser.me/api/?nat=in"

export interface WithUserDataProps {
  user: User | undefined
  loading: boolean
}

export const WithUserData = <P,>(
  Component: ComponentType<P & WithUserDataProps>
) => {
  return (props: P) => {
    const { value, loading } = useFetch<UserResponse>(API_URL)
    const user = value?.results?.[0]

    return <Component {...props} user={user} loading={loading} />
  }
}
