export default function auth_helper() {
    const token = JSON.parse(localStorage.getItem("user/token"))
    const user_id = JSON.parse(localStorage.getItem("user/user_id"))

    if (user_id && token) {
        return { "x-auth-token": token, "user_id": user_id }
    } else {
        return {}
    }
}