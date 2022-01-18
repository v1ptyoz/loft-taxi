import { recordSaga } from "./helpers";
import { getAddressesSaga } from  "../modules/sagas/addressesSaga";
import { getAddresses } from "../modules/addresses/actions";
import { doGetAddressList } from "../modules/api"

jest.mock("../modules/api");

describe("addressesSaga test", () => {
  it("get addresses via api", async () => {
    doGetAddressList.mockImplementation(() => ({ status: 200, data: ["Address 1","Address 2"]}));
    const dispatched = await recordSaga(
      getAddressesSaga,
      getAddresses()
    )
    expect(dispatched).toEqual([
      {
        type: "loft-taxi/addresses/setAddresses",
        payload: ["Address 1","Address 2"]
      }
    ])
  })
})
