export default function auth_helper() {
    const token_string = localStorage.getItem("user/token")
    const token = JSON.parse(token_string)
    const user_id_string = localStorage.getItem("user/user_id")
    const user_id = JSON.parse(user_id_string)

    if (user_id && token) {
        return { "x-access-token": token, "user_id": user_id }
    } else {
        return {}
    }
}