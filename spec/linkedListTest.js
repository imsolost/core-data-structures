import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/LinkedList'
import Node from '../src/node'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'
  let linkedListA = new LinkedList()
  linkedListA.insert('apple')
  linkedListA.insert('banana')
  linkedListA.insert('candy')
  linkedListA.insert('dog')
  linkedListA.insert('elephant')

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('gets the data of head node.', () => {

      expect( linkedListA.getHeadNode().data )
        .to.eql( 'apple' )
    })

    it('gets the data of the next node from the head.', () => {

      expect( linkedListA.getHeadNode().next.data )
        .to.eql( 'banana' )
    })
  })

  context('getTailNode()', () => {
    it('gets data of the the tail node.', () => {

      expect( linkedListA.getTailNode().data )
        .to.eql( 'elephant' )
    })
  })

  context('contains()', () => {
    it('determines whether or not the list contains "elephant".', () => {

      expect( linkedListA.contains('elephant') )
        .to.equal( true )
    })

    it('determines whether or not the list contains "monkey".', () => {

      expect( linkedListA.contains('monkey') )
        .to.equal( false )
    })
  })

  context('find()', () => {
    it('returns the first node containing "banana".', () => {

      expect( linkedListA.find('banana').data )
        .to.equal( 'banana' )
    })

    it('returns -1 if it cannot find the data.', () => {

      expect( linkedListA.find('monkey') )
        .to.equal( -1 )
    })
  })

  context('insert()', () => {
    it('inserts a node with the provided data to the tail of the list.', () => {
      linkedListA.insert('frapple')
      expect( linkedListA.tail.data )
        .to.equal( 'frapple' )
    })
  })

  context('insertFirst()', () => {
    it('inserts a node with the provided data to the head of the list.', () => {
      linkedListA.insertFirst('zero')
      expect( linkedListA.head.data )
        .to.equal( 'zero' )
    })
  })

})
