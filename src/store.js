import { configureStore } from '@reduxjs/toolkit'
import championSlice from './features/championSlice'
import itemsSlice from './features/itemsSlice'
import mathSlice from './features/mathSlice'

export default configureStore({
  reducer: {
    selectedChampion: championSlice,
    selectedItem: itemsSlice,
    itemsMath: mathSlice
  }
})
