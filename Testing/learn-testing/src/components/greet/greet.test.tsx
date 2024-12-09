import { render, screen} from "@testing-library/react";
import { Greet } from "./greet";

describe('Greet', () => {
    test('Renders Currectly' ,() => {
        render(<Greet />)
        const textElement = screen.getByText(/Hello/i)
        expect(textElement).toBeInTheDocument();

    })

    describe('nested',() => {
        test('Renders with a name' , () => {
            render(<Greet name='Priyanka' />)
            const textElement = screen.getByText('Hello Priyanka')
            expect(textElement).toBeInTheDocument()
        })
    })
})

