import axios from "axios"
const juandevAPI = axios.create({
  baseURL: "https://juan05292023-dev-87001.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return juandevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_acma_list(payload) {
  return juandevAPI.get(`/api/v1/acma/`)
}
function api_v1_acma_create(payload) {
  return juandevAPI.post(`/api/v1/acma/`, payload.data)
}
function api_v1_acma_retrieve(payload) {
  return juandevAPI.get(`/api/v1/acma/${payload.id}/`)
}
function api_v1_acma_update(payload) {
  return juandevAPI.put(`/api/v1/acma/${payload.id}/`, payload.data)
}
function api_v1_acma_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/acma/${payload.id}/`, payload.data)
}
function api_v1_acma_destroy(payload) {
  return juandevAPI.delete(`/api/v1/acma/${payload.id}/`)
}
function api_v1_animal_list(payload) {
  return juandevAPI.get(`/api/v1/animal/`)
}
function api_v1_animal_create(payload) {
  return juandevAPI.post(`/api/v1/animal/`, payload.data)
}
function api_v1_animal_retrieve(payload) {
  return juandevAPI.get(`/api/v1/animal/${payload.id}/`)
}
function api_v1_animal_update(payload) {
  return juandevAPI.put(`/api/v1/animal/${payload.id}/`, payload.data)
}
function api_v1_animal_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/animal/${payload.id}/`, payload.data)
}
function api_v1_animal_destroy(payload) {
  return juandevAPI.delete(`/api/v1/animal/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return juandevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_newmo_list(payload) {
  return juandevAPI.get(`/api/v1/newmo/`)
}
function api_v1_newmo_create(payload) {
  return juandevAPI.post(`/api/v1/newmo/`, payload.data)
}
function api_v1_newmo_retrieve(payload) {
  return juandevAPI.get(`/api/v1/newmo/${payload.id}/`)
}
function api_v1_newmo_update(payload) {
  return juandevAPI.put(`/api/v1/newmo/${payload.id}/`, payload.data)
}
function api_v1_newmo_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/newmo/${payload.id}/`, payload.data)
}
function api_v1_newmo_destroy(payload) {
  return juandevAPI.delete(`/api/v1/newmo/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return juandevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return juandevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return juandevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return juandevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juandevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return juandevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_acma_list,
  api_v1_acma_create,
  api_v1_acma_retrieve,
  api_v1_acma_update,
  api_v1_acma_partial_update,
  api_v1_acma_destroy,
  api_v1_animal_list,
  api_v1_animal_create,
  api_v1_animal_retrieve,
  api_v1_animal_update,
  api_v1_animal_partial_update,
  api_v1_animal_destroy,
  api_v1_login_create,
  api_v1_newmo_list,
  api_v1_newmo_create,
  api_v1_newmo_retrieve,
  api_v1_newmo_update,
  api_v1_newmo_partial_update,
  api_v1_newmo_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
