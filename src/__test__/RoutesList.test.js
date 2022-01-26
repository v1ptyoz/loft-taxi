import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import RoutesList from "../components/RoutesList/RoutesList";
import configureStore from "redux-mock-store";
import { getAddresses } from "../modules/addresses/actions";

describe("Routes List tests", () => {
  it("Load addresses when render", () => {
      const mockStore = configureStore();
      const initialStore = {
        addresses: {
          list: [],
        },
        card: {},
        route: {
          points: [],
        },
      }
      const store = mockStore(initialStore);
      render(
        <Provider store={store}>
          <RoutesList />
        </Provider>
      )
      expect(store.getActions()).toEqual([{type: getAddresses.toString()}]);
    });
  })
