import { recordSaga } from "./helpers";
import { routesSaga } from  "../modules/sagas/routeSaga";
import { getRoute } from "../modules/route/actions";
import { doGetRoute } from "../modules/api"


jest.mock("../modules/api");

describe("Route saga test", () => {
  it("get routes via api", async () => {
    doGetRoute.mockImplementation(() => ({status: 200, data: [[1,2],[3,4],[5,6]]}));
    const dispatched = await recordSaga(
      routesSaga,
      getRoute(["testAddress1", "testAddress2"])
    )
    expect(dispatched).toEqual([
      {
        type: "loft-taxi/route/setLoading"
      },
      {
        type: "loft-taxi/route/setRoute",
        payload: [[1,2],[3,4],[5,6]]
      }
    ])
  })
})