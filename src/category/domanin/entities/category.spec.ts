import { Category } from "./category";

describe("Category Test", () => {

  test('construtor test', () => {
    const category = new Category('movies');
    expect(category.name).toBe('movies')
  })

});