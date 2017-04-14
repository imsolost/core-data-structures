import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Doublelink from '../src/doublelink'

chai.use(chaiChange)

describe('doublelink', () => {

  it('exists', () => {
    expect(Doublelink).to.be.a('function')
  })

  context('insert()', () => {
    let doublelinkA = new Doublelink()

    it('inserts nodes with the provided data to the list.', () => {
      doublelinkA.insert('apple')
      doublelinkA.insert('banana')
      doublelinkA.insert('cherry')
      doublelinkA.insert('dongoFruit')
      expect( doublelinkA.tail.data ).to.equal( 'dongoFruit' )
      expect( doublelinkA.head.data ).to.equal( 'apple' )
    })
  })

})
