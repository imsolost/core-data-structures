'use strict'

export default class Queue {
  constructor() {
    this.oldestIndex = 1
    this.newestIndex = 1
    this.storage = {}
  }

  enqueue(data) {
    this.storage[this.newestIndex] = data
    this.newestIndex++
  }

  dequeue() {
    let oldestIndex = this.oldestIndex,
        newestIndex = this.newestIndex,
        deletedData

    if ( oldestIndex !== newestIndex ) {
      deletedData = this.storage[oldestIndex]
      delete this.storage[oldestIndex]
      this.oldestIndex++

      return deletedData
    }
    return null
  }

  front() {
    if ( this.oldestIndex !== this.newestIndex ) {
      return this.storage[this.oldestIndex]
    }
    return null
  }

  back() {
    if ( this.oldestIndex !== this.newestIndex ) {
      return this.storage[this.newestIndex - 1]
    }
    return null
  }

  isEmpty() {
    if ( this.oldestIndex === this.newestIndex ) {
      return true
    }
    return false
  }

  length() {
    return this.newestIndex - this.oldestIndex
  }

}
