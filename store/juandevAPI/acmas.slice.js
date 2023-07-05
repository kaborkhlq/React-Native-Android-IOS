import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_acma_list = createAsyncThunk(
  "acmas/api_v1_acma_list",
  async payload => {
    const response = await apiService.api_v1_acma_list(payload)
    return response.data
  }
)
export const api_v1_acma_create = createAsyncThunk(
  "acmas/api_v1_acma_create",
  async payload => {
    const response = await apiService.api_v1_acma_create(payload)
    return response.data
  }
)
export const api_v1_acma_retrieve = createAsyncThunk(
  "acmas/api_v1_acma_retrieve",
  async payload => {
    const response = await apiService.api_v1_acma_retrieve(payload)
    return response.data
  }
)
export const api_v1_acma_update = createAsyncThunk(
  "acmas/api_v1_acma_update",
  async payload => {
    const response = await apiService.api_v1_acma_update(payload)
    return response.data
  }
)
export const api_v1_acma_partial_update = createAsyncThunk(
  "acmas/api_v1_acma_partial_update",
  async payload => {
    const response = await apiService.api_v1_acma_partial_update(payload)
    return response.data
  }
)
export const api_v1_acma_destroy = createAsyncThunk(
  "acmas/api_v1_acma_destroy",
  async payload => {
    const response = await apiService.api_v1_acma_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const acmasSlice = createSlice({
  name: "acmas",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_acma_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_acma_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_acma_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_acma_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_acma_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_acma_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_acma_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_acma_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_acma_list,
  api_v1_acma_create,
  api_v1_acma_retrieve,
  api_v1_acma_update,
  api_v1_acma_partial_update,
  api_v1_acma_destroy,
  slice: acmasSlice
}
