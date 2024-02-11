import { configureStore } from '@reduxjs/toolkit'
import championSlice from './features/championSlice'
import itemsSlice from './features/itemsSlice'

export default configureStore({
  reducer: {
    selectedChampion: championSlice,
    selectedItem: itemsSlice
  }
})
