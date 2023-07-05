import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_animal_list = createAsyncThunk(
  "animals/api_v1_animal_list",
  async payload => {
    const response = await apiService.api_v1_animal_list(payload)
    return response.data
  }
)
export const api_v1_animal_create = createAsyncThunk(
  "animals/api_v1_animal_create",
  async payload => {
    const response = await apiService.api_v1_animal_create(payload)
    return response.data
  }
)
export const api_v1_animal_retrieve = createAsyncThunk(
  "animals/api_v1_animal_retrieve",
  async payload => {
    const response = await apiService.api_v1_animal_retrieve(payload)
    return response.data
  }
)
export const api_v1_animal_update = createAsyncThunk(
  "animals/api_v1_animal_update",
  async payload => {
    const response = await apiService.api_v1_animal_update(payload)
    return response.data
  }
)
export const api_v1_animal_partial_update = createAsyncThunk(
  "animals/api_v1_animal_partial_update",
  async payload => {
    const response = await apiService.api_v1_animal_partial_update(payload)
    return response.data
  }
)
export const api_v1_animal_destroy = createAsyncThunk(
  "animals/api_v1_animal_destroy",
  async payload => {
    const response = await apiService.api_v1_animal_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const animalsSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_animal_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_animal_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_animal_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_animal_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_animal_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_animal_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_animal_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_animal_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_animal_list,
  api_v1_animal_create,
  api_v1_animal_retrieve,
  api_v1_animal_update,
  api_v1_animal_partial_update,
  api_v1_animal_destroy,
  slice: animalsSlice
}
