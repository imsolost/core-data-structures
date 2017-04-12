import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'
  const myStack = new Stack()
  myStack.push('zero')

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {

      expect( () => myStack.push('one') )
        .to.alter(() => myStack.length(), { from: 1, to: 2 })
    })

    it('the stack contains the pushed element.', () => {

      expect( myStack.storage[1] ).to.equal( 'one' )
    })
  })

  context('pop()', () => {
    it('removes the top element in the stack.', () => {

      expect( () => myStack.pop() )
        .to.alter(() => myStack.length(), { from: 2, to: 1 })
    })

    it('returns the removed element.', () => {

      expect( myStack.pop() ).to.equal( 'zero' )
    })

    it('returns null if the stack is empty.', () => {

      expect( myStack.pop() ).to.equal( null )
    })
  })

  context('peek()', () => {
    it('returns the top element of the stack.', () => {
      myStack.push('new_element')
      expect( myStack.peek() ).to.equal('new_element')
    })

    it('returns null if the stack is empty.', () => {
      myStack.pop()
      expect( myStack.peek() ).to.equal( null )
    })
  })

})
