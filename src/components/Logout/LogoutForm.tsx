import { logout } from "@/app/actions/login"

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button>logout</button>
    </form>
  )
}

export default LogoutForm