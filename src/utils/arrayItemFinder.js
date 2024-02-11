function arrayItemFinder(state, payload) {
    let allSelectedItems = state
      let exists;
      for (let i = 0; i < allSelectedItems.length; i++) {
        if (allSelectedItems[i].id === payload.id) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        state.push(payload.payload);
      }
}

export default arrayItemFinder;