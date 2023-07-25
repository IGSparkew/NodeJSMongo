import { ListUtils } from "../utils/listUtils";

test('test filtered string list', () => {
    const queryResult = ["action", "action", "fantasy"];
    const testResult = ListUtils.filteredString(queryResult);
    expect(testResult.length).toBe(2);
    expect(testResult[0]).toBe("action");
    expect(testResult[1]).toBe("fantasy");
})