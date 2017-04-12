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

  context('getHeadNode()', () => {
    it('gets the data of head node.', () => {

      expect( linkedListA.getHeadNode().data )
        .to.equal( 'zero' )
    })

    it('gets the data of the next node from the head.', () => {

      expect( linkedListA.getHeadNode().next.data )
        .to.equal( 'apple' )
    })
  })

  context('getTailNode()', () => {
    it('gets data of the the tail node.', () => {

      expect( linkedListA.getTailNode().data )
        .to.equal( 'frapple' )
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

  context('insertBefore()', () => {
    it('increase the size of the list by 1', () => {

    expect( () => linkedListA.insertBefore('apple', 'tiger') )
      .to.alter( () => linkedListA.size, { from: 7, to: 8 } )
    })

    it('inserts data "tiger" before node containing data "apple"', () => {

      expect( linkedListA.head.next.data )
        .to.equal( 'tiger' )
    })

    it('inserts data "negative_zero" before node containing data "zero"', () => {
      linkedListA.insertBefore('zero', 'negative_zero')
      expect( linkedListA.head.data )
        .to.equal( 'negative_zero' )
    })
  })

  context('insertAfter()', () => {
    it('increase the size of the list by 1', () => {

    expect( () => linkedListA.insertAfter('apple', 'mongoose') )
      .to.alter( () => linkedListA.size, { from: 9, to: 10 } )
    })

    it('inserts data "mongoose" after node containing data "apple"', () => {

      expect( linkedListA.head.next.next.next.next.data )
        .to.equal( 'mongoose' )
    })

    it('inserts data "end" after node containing data "frapple"', () => {
      linkedListA.insertAfter('frapple', 'end')
      expect( linkedListA.tail.data )
        .to.equal( 'end' )
    })
  })

  context('remove()', () => {
    it('removes the tail node from the list.', () => {
      linkedListA.remove()
      expect( linkedListA.tail.data )
        .to.equal( 'frapple' )
    })
  })

  context('removeFirst()', () => {
    it('removes the head node from the list.', () => {
      linkedListA.removeFirst()
      expect( linkedListA.head.data )
        .to.equal( 'zero' )
    })
  })

  context('size()', () => {
    it('returns the size of the list.', () => {

      expect( linkedListA.size )
        .to.equal( 9 )
    })
  })

  context('clear()', () => {
    it('clears the list of all nodes/data.', () => {
      linkedListA.clear()
      expect( linkedListA.size )
        .to.equal( 0 )
    })
  })

})
