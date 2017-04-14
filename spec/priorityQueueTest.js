import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import priorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('priorityQueue', () => {
  const myQueue = new priorityQueue()
  myQueue.enqueue('zero', 100)

  it('exists', () => {
    expect(priorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {

      expect( () => myQueue.enqueue('one', 200) )
        .to.alter( () => myQueue.length(), { from: 1, to: 2 })
    })

    it('the stack contains the pushed element.', () => {

      expect( myQueue.storage[200] ).to.equal( 'one' )
    })
  })

  context('dequeue()', () => {
    it('returns the removed element.', () => {

      expect( myQueue.dequeue() ).to.equal( 'one' )
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
      myQueue.enqueue('first_element', 100)
      myQueue.enqueue('second_element', 200)
      expect( myQueue.front() ).to.equal('second_element')
    })

    it('returns null if the queue is empty.', () => {
      myQueue.dequeue()
      myQueue.dequeue()
      expect( myQueue.front() ).to.equal( null )
    })
  })

  context('back()', () => {
    it('returns the back element of the queue.', () => {
      myQueue.enqueue('first_element', 100)
      myQueue.enqueue('second_element', 200)
      expect( myQueue.back() ).to.equal('first_element')
    })

    it('returns null if the queue is empty.', () => {
      myQueue.dequeue()
      myQueue.dequeue()
      console.log('que say what?', myQueue);
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
