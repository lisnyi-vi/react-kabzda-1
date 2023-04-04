import React from 'react';
import {create} from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus component", ()=>{
  test("status from props should be in the state",()=>{
    const component = create(<ProfileStatus status="lisnyi.com"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("lisnyi.com");
  })
  
  test("after creation span should be displayed",()=>{
    const component = create(<ProfileStatus status="lisnyi.com"/>);
    const instance = component.root;
    let span = instance.findByType("span")
    expect(span).not.toBeNull();
  })
  
  test("after creation input shouldn't be displayed",()=>{
    const component = create(<ProfileStatus status="lisnyi.com"/>);
    const instance = component.root;
    expect(()=>{
      let input = instance.findByType("input")
    }).toThrow();
  })
  
  test("after creation span should contains correct status",()=>{
    const component = create(<ProfileStatus status="lisnyi.com"/>);
    const instance = component.root;
    let span = instance.findByType("span")
    expect(span.children[0]).toBe("lisnyi.com");
  })
  
  test("input should be displayed in edit mode insteade of span",()=>{
    const component = create(<ProfileStatus status="lisnyi.com"/>);
    const instance = component.root;
    let span = instance.findByType("span")
    span.props.onDoubleClick();
    let input = instance.findByType("input")
    expect(input.props.value).toBe("lisnyi.com");
  })
  
   test("callbach status be called",()=>{
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="lisnyi.com" updateStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1);
  })
}
)