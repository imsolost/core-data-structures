import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe.only('set', () => {

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('insert()', () => {
    const setA = new Set([1, 2, 3])

    it('adds a unique element to the set.', () => {
      setA.add(4)
      setA.add(2)
      expect( setA.data.length ).to.equal( 4 )
      expect( setA.data[3] ).to.equal( 4 )
    })
  })

  context('contains()', () => {
    const setB = new Set([1, 2, 3])
    it('checks to see if a set contains the input.', () => {
      expect( setB.contains(2) ).to.equal( true )
      expect( setB.contains(5) ).to.equal( false )
    })
  })

  context('isEmpty()', () => {
    const setC = new Set([1, 2, 3])
    const setD = new Set([])
    it('checks to see if a set is empty.', () => {
      expect( setD.isEmpty() ).to.equal( true )
      expect( setC.isEmpty() ).to.equal( false )
    })
  })

  context('remove()', () => {
    const setE = new Set([1, 2, 3])
    setE.remove(2)
    it('checks to see if the data is removed.', () => {
      expect( setE.data[1] ).to.equal( 3 )
    })
  })

  context('forEach()', () => {
    const setF = new Set([1, 2, 3])
    it('checks to see if the callback worked on each element.', () => {
      expect( setF.forEach(elem => 2 * (elem) ) ).to.eql( [2, 4, 6] )
    })
  })

  context('size()', () => {
    const setG = new Set([1, 2, 3])
    it('checks to see the size of the set.', () => {
      expect( setG.size() ).to.equal( 3 )
    })
  })

  context('union()', () => {
    const setG = new Set([1, 2, 3])
    const setH = new Set([4, 3, 2])
    it('checks to see the size of the sets merged.', () => {
      expect( setG.union(setH) ).to.eql( [1, 2, 3, 4] )
    })
  })

})
