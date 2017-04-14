import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import priorityQueueNode from '../src/priorityQueueNode'

chai.use(chaiChange)

describe('priorityQueueNode', () => {
  let myQueue = new priorityQueueNode()
  myQueue.enqueue('two', 2)
  myQueue.enqueue('one', 1)
  myQueue.enqueue('three', 3)

  it('exists', () => {
    expect(priorityQueueNode).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
      expect( myQueue.size ).to.equal( 3 )
    })

    it('contains the pushed element.', () => {
      expect( myQueue.head.data ).to.equal( 'one' )
      expect( myQueue.tail.data ).to.equal( 'three' )
    })
  })

  context('dequeue()', () => {
    it('returns the removed element.', () => {

      expect( myQueue.dequeue().data ).to.equal( 'three' )
    })

    it('removes the front element from the queue.', () => {

      expect( myQueue.size ).to.equal( 2 )
    })

    it('returns null if the queue is empty.', () => {
      myQueue.dequeue()
      expect( myQueue.dequeue() ).to.equal( null )
    })
  })

  context('front()', () => {
    it('returns the front element of the queue.', () => {
      myQueue.enqueue('200element', 200)
      myQueue.enqueue('300element', 300)
      myQueue.enqueue('100element', 100)
      expect( myQueue.front().data ).to.equal('300element')
    })

    it('returns null if the queue is empty.', () => {
      myQueue.dequeue()
      myQueue.dequeue()
      myQueue.dequeue()
       expect( myQueue.front() ).to.equal( null )
    })
  })

  context('back()', () => {
    it('returns the back element of the queue.', () => {
      myQueue.enqueue('first_element', 100)
      myQueue.enqueue('second_element', 200)
      expect( myQueue.back().data ).to.equal('first_element')
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
