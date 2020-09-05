import { store } from '../../../store/store';
import { actions } from '../../../store/actions';

describe("Main reducer", () => {
  
  beforeEach(() => {
  })
  it("can set current date", () => {
    store.dispatch(actions.setCurrentDate(new Date('1985-09-12')));
    expect(store.getState().currentDate).toEqual(new Date('1985-09-12'));
  });
})