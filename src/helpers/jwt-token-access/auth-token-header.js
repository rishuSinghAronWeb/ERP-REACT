export default () => {
  const obj = JSON.parse(localStorage.getItem("authData"))
  if (obj && obj.data && obj.data.Token) {
    return { Authorization: "Bearer " + obj.data.Token }
  } else {
    return {}
  }
}
