import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_xcdsfs_list = createAsyncThunk(
  "xcdsfs/api_v1_xcdsfs_list",
  async payload => {
    const response = await apiService.api_v1_xcdsfs_list(payload)
    return response.data
  }
)
export const api_v1_xcdsfs_create = createAsyncThunk(
  "xcdsfs/api_v1_xcdsfs_create",
  async payload => {
    const response = await apiService.api_v1_xcdsfs_create(payload)
    return response.data
  }
)
export const api_v1_xcdsfs_retrieve = createAsyncThunk(
  "xcdsfs/api_v1_xcdsfs_retrieve",
  async payload => {
    const response = await apiService.api_v1_xcdsfs_retrieve(payload)
    return response.data
  }
)
export const api_v1_xcdsfs_update = createAsyncThunk(
  "xcdsfs/api_v1_xcdsfs_update",
  async payload => {
    const response = await apiService.api_v1_xcdsfs_update(payload)
    return response.data
  }
)
export const api_v1_xcdsfs_partial_update = createAsyncThunk(
  "xcdsfs/api_v1_xcdsfs_partial_update",
  async payload => {
    const response = await apiService.api_v1_xcdsfs_partial_update(payload)
    return response.data
  }
)
export const api_v1_xcdsfs_destroy = createAsyncThunk(
  "xcdsfs/api_v1_xcdsfs_destroy",
  async payload => {
    const response = await apiService.api_v1_xcdsfs_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const xcdsfsSlice = createSlice({
  name: "xcdsfs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_xcdsfs_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xcdsfs_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xcdsfs_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xcdsfs_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xcdsfs_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xcdsfs_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_xcdsfs_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_xcdsfs_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_xcdsfs_list,
  api_v1_xcdsfs_create,
  api_v1_xcdsfs_retrieve,
  api_v1_xcdsfs_update,
  api_v1_xcdsfs_partial_update,
  api_v1_xcdsfs_destroy,
  slice: xcdsfsSlice
}
