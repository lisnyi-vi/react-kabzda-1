import React from "react";
import {
  create
} from 'react-test-renderer'
import Paginator from './Paginator'

describe("Paginator component", ()=> {
  test("page count is 11 but should be shjwer only 10", ()=> {
    const component = create(<Paginator
      totalUsersCount={11}
      pageSize={1}
      portionSize={10}/>);
    const instance = component.root;
    let span = instance.findAllByType("span")
    expect(span.length).toBe(10);
  })

  test("if page count is more then 10 button NEXT should be present", ()=> {
    const component = create(<Paginator
      totalUsersCount={11}
      pageSize={1}
      portionSize={10} />);
    const instance = component.root;
    let button = instance.findAllByType("button")
    expect(button.length).toBe(1);
  })
})