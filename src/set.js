export default class Set {
  constructor(array) {
    this.data = array
  }

  add(element) {
    if (!this.data.includes(element)) {
      this.data.push(element)
    }
  }

  isEmpty() {
    if (this.data.length === 0) {
      return true
    }
    return false
  }

  contains(input) {
    return this.data.includes(input)
  }

  remove(input) {
    let i = this.data.indexOf(input)
    if (i != -1) {
      this.data.splice(i, 1)
    }
  }

  forEach(callback) {
    let accum = []
    for (var i = 0; i < this.data.length; i++) {
      accum.push(callback( this.data[i] ) )
    }
    return accum
  }

  size() {
    return this.data.length
  }

  union(set2) {
    let accumulator = this.data
    for (let i = 0; i < set2.data.length; i++) {
      if ( !accumulator.includes( set2.data[i] ) ) {
        accumulator.push( set2.data[i] )
      }
    }
    return accumulator
  }

  intersect() {

  }

  difference() {

  }

  isSubset() {

  }

  clone() {

  }


}
