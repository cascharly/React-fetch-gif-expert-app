import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

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

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";

    // simular inputChange
    wrapper.find("input").simulate("change", { target: { value } });

    // simular submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // setCategories se debe haber llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // evaluar si el imput esta vacio
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
