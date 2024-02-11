import { configureStore } from '@reduxjs/toolkit'
import championSlice from './features/championSlice'

export default configureStore({
  reducer: {
    selectedChampion: championSlice
  }
})
