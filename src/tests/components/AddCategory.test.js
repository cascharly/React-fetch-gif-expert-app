import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach( ()=>{
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories} />);
  } )

  test("debe mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe postear informacion en submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled()
  });
});
