import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_newmo_list = createAsyncThunk(
  "newMos/api_v1_newmo_list",
  async payload => {
    const response = await apiService.api_v1_newmo_list(payload)
    return response.data
  }
)
export const api_v1_newmo_create = createAsyncThunk(
  "newMos/api_v1_newmo_create",
  async payload => {
    const response = await apiService.api_v1_newmo_create(payload)
    return response.data
  }
)
export const api_v1_newmo_retrieve = createAsyncThunk(
  "newMos/api_v1_newmo_retrieve",
  async payload => {
    const response = await apiService.api_v1_newmo_retrieve(payload)
    return response.data
  }
)
export const api_v1_newmo_update = createAsyncThunk(
  "newMos/api_v1_newmo_update",
  async payload => {
    const response = await apiService.api_v1_newmo_update(payload)
    return response.data
  }
)
export const api_v1_newmo_partial_update = createAsyncThunk(
  "newMos/api_v1_newmo_partial_update",
  async payload => {
    const response = await apiService.api_v1_newmo_partial_update(payload)
    return response.data
  }
)
export const api_v1_newmo_destroy = createAsyncThunk(
  "newMos/api_v1_newmo_destroy",
  async payload => {
    const response = await apiService.api_v1_newmo_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const newMosSlice = createSlice({
  name: "newMos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_newmo_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmo_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmo_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmo_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmo_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmo_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_newmo_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_newmo_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_newmo_list,
  api_v1_newmo_create,
  api_v1_newmo_retrieve,
  api_v1_newmo_update,
  api_v1_newmo_partial_update,
  api_v1_newmo_destroy,
  slice: newMosSlice
}
