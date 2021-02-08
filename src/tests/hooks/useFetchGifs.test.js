import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en Hook useFetchGifs", () => {
  test("debe retornar estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { data, loading } = result.current;
    //    console.log(resp);

    // console.log(data, loading);
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
