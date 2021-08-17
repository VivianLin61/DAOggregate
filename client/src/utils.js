import { useState } from 'react'
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    callback()
  }
  const resetValues = () => {
    setValues({})
  }
  return {
    onChange,
    onSubmit,
    resetValues,
    values,
  }
}

export const isInIncreasingOrder = (itemsToTest, sortingCriteria) => {
  for (let i = 0; i < itemsToTest.length - 1; i++) {
    if (itemsToTest[i][sortingCriteria] > itemsToTest[i + 1][sortingCriteria])
      return false
  }
  return true
}

export const makeCompareFunction = (criteria, increasing) => {
  return function (item1, item2) {
    let negate = -1
    if (increasing) {
      negate = 1
    }
    let value1 = item1[criteria]
    let value2 = item2[criteria]
    if (value1 < value2) {
      return -1 * negate
    } else if (value1 === value2) {
      return 0
    } else {
      return 1 * negate
    }
  }
}

export const sort = (field, daos) => {
  let oldItemsIds = []
  let itemsToSort = []

  for (let i = 0; i < daos.length; i++) {
    let item = daos[i]
    oldItemsIds.push(item.id)
    itemsToSort.push(item)
  }

  let sortIncreasing = true

  // IS IT ALREADY SORTED ACCORDING TO THE SELECTED
  // CRITERIA IN INCREASING ORDER?
  if (isInIncreasingOrder(itemsToSort, field)) {
    sortIncreasing = false
  }

  let compareFunction = makeCompareFunction(field, sortIncreasing)
  itemsToSort = itemsToSort.sort(compareFunction)

  // NOW GET THE SORTED ORDER FOR IDS
  let newItems = []
  for (let i = 0; i < itemsToSort.length; i++) {
    let item = itemsToSort[i]
    newItems.push(item)
  }

  return newItems
}
