const storeData = async (key, value) => {
  try {
    await localStorage.setItem(key, value)
  } catch (error) {
    console.log("storeData", error)
  }
}

const getData = async key => {
  let res = ""
  try {
    res = await localStorage.getItem(key)
  } catch (error) {
    console.log("getData", error)
  }
  return res
}

export { getData, storeData }
