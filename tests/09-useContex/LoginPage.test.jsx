
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas en <LoginPage/>", () => {
  test("Debe mostrar el componente sin el usuario", () => {

    render(
        <UserContext.Provider value={{user:null}}>
            <LoginPage/>
        </UserContext.Provider>
    )
    const preTag=screen.getByLabelText('preLogin')
    expect(preTag.innerHTML).toBe('null')

  });

  test("Debe llamar el setUser al hacer click", () => {
    const setUserMock=jest.fn();
    render(
        <UserContext.Provider value={{user:null, setUser:setUserMock}}>
            <LoginPage/>
        </UserContext.Provider>
    )
    const button=screen.getByRole('button');
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith( {"email": "juan@google.com", "id": 123, "name": "Juan"})
  });
});
