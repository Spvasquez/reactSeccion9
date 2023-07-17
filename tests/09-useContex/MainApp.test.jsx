import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en <MainAPp/>', () => { 
    test('Debe mostrar el HomePage', () => { 
        render(
            <MemoryRouter>
            <MainApp/>
            </MemoryRouter>
            )
        expect(screen.getByText('HomePage')).toBeTruthy()
     })

    test('Debe mostrar el Login', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
            </MemoryRouter>
            )
        expect(screen.getByText('Login Page')).toBeTruthy()
     })
 })