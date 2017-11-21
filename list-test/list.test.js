describe("operation for add list", function () {
  var newElement = 20,
    list = '';
  
  it("get list", function () {
    expect(getList()).toEqual('');
    list = getList();
  });
  it("add new element in list", function () {
    expect(addInList(newElement)).toEqual('20,');
  });
  it("check size", function () {
    expect(getList()).toEqual('20,');
  });
  it("add second element", function () {
    expect(getList()).toEqual('20,');
  });
  it("add four element", function () {
    expect(getList()).toEqual('20,');
  });
});

describe("operations for update list", function () {
  it("update element in list", function () {
    var newValue = 10;
    expect(updateInList(newValue)).toEqual(2);
  });
});
describe("operations for delete list", function () {
  it("delete element in list", function () {
    var indexDelete = 1;
    expect(deleteInList(indexDelete)).toEqual(2);
  });
});
describe("operations for size list", function () {
  it("size list", function () {
    expect(sizeForList()).toEqual(2);
  });
});