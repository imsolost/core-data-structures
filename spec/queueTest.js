import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'
  const myQueue = new Queue()
  myQueue.enqueue('zero')

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {

      expect( () => myQueue.enqueue('one') )
        .to.alter( () => myQueue.length(), { from: 1, to: 2 })
    })

    it('the stack contains the pushed element.', () => {

      expect( myQueue.storage[2] ).to.equal( 'one' )
    })
  })

  context('dequeue()', () => {
    it('returns the removed element.', () => {

      expect( myQueue.dequeue() ).to.equal( 'zero' )
    })

    it('removes the front element from the queue.', () => {

      expect( () => myQueue.dequeue() )
        .to.alter( () => myQueue.length(), { from: 1, to: 0 })
    })

    it('returns null if the queue is empty.', () => {

      expect( myQueue.dequeue() ).to.equal( null )
    })
  })

  context('front()', () => {
    it('returns the front element of the queue.', () => {
      myQueue.enqueue('first_element')
      myQueue.enqueue('second_element')
      expect( myQueue.front() ).to.equal('first_element')
    })

    it('returns null if the queue is empty.', () => {
      myQueue.dequeue()
      myQueue.dequeue()
      expect( myQueue.front() ).to.equal( null )
    })
  })

  context('back()', () => {
    it('returns the back element of the queue.', () => {
      myQueue.enqueue('first_element')
      myQueue.enqueue('second_element')
      expect( myQueue.back() ).to.equal('second_element')
    })

    it('returns null if the queue is empty.', () => {
      myQueue.dequeue()
      myQueue.dequeue()
      expect( myQueue.back() ).to.equal( null )
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty.', () => {
      expect( myQueue.isEmpty() ).to.equal( true )
    })

    it('returns false if it is not empty.', () => {
      myQueue.enqueue('first_element')
      expect( myQueue.isEmpty() ).to.equal( false )
    })
  })

})
