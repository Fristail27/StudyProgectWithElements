import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test("reducer should change value to opposite value", () => {
    //data
    const state :StateType = {
        collapsed: false,
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true);
})

test("collapsed should be false", () => {
    //data
    const state :StateType = {
        collapsed: true,
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false);
})

test("to throw error", () => {
    //data
    const state :StateType = {
        collapsed: true,
    }

    //action

    //expectation
    expect(()=>{
        reducer(state, {type: "hjg6"})
    }).toThrowError()
})