import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Prueba de <GifGrid />", () => {
  const category = "One Punch";

  test("debe mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {

    const gifs = [{
        id:'ABC',
        url:'http://localhost:3000/',
        title: 'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
        data: [],
        loading: false,
      });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot()
  });
});
