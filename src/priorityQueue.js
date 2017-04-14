export default class priorityQueue {
  constructor() {
    this.size = 0
    this.storage = {}
  }

  enqueue(data, priority) {
    this.storage[priority] = data
    this.size++
  }

  dequeue() {
    let accumulator = 0,
        deletedData

    if (this.size > 0) {
      for (let key in this.storage) {
        if ( key > accumulator) {
          accumulator = key
        }
      }
      deletedData = this.storage[accumulator]

      delete this.storage[accumulator]
      this.size--
      return deletedData
    }
    return null
  }

  front() {
    let accumulator = 0

    if ( this.size > 0 ) {
      for (let key in this.storage) {
        if ( key > accumulator) {
          accumulator = key
        }
      }
      return this.storage[accumulator]
    }
    return null
  }

  back() {
    let accumulator = 0

    if ( this.size > 0 ) {
      for (let key in this.storage) {
        if ( key <= Object.keys(this.storage)[0] ) {
          accumulator = key
        }
      }
      return this.storage[accumulator]
    }
    return null
  }

  isEmpty() {
    if ( this.size === 0 ) {
      return true
    }
    return false
  }

  length() {
    return this.size
  }

}
