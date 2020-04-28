export const getLocalStorageItems = () => {
  try {
    const persistedState = localStorage.getItem('contacts');
    if (persistedState) return [...JSON.parse(persistedState)];
    return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const updateLocalStorage = contacts => {
  try {
    const dataToUpdate = JSON.stringify(contacts);
    localStorage.setItem('contacts', dataToUpdate);
  } catch (e) {
    console.log(e);
  }
};
