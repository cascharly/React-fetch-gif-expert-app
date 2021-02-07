import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  test("debe mostrar el componente correctamente", () => {
    const title = "Un titulo";
    const url = "https://localhost/algo.jpg";

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    expect(wrapper).toMatchSnapshot();
  });
});
