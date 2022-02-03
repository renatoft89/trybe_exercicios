import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import responseAPI from './mocks';

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
    render(<App />);   
  })

  test('Verifica se aparece o card com titulo de "Rick Sanchez"',async () => {
    const myCard = await screen.findByText(/Rick Sanchez/i)
    expect(myCard).toBeInTheDocument();
  })

  test('Verifica se existem o input de texto e o botão "Buscar"',async () => {
    const myInput = await screen.findByRole('textbox')
    const myButton = await screen.findByRole('button')
   
   expect(myInput).toBeInTheDocument();
   expect(myButton).toBeInTheDocument();
   
  })

  test('Verifica se ao buscar por "Smith" aparecem apenas 4 cards',async () => {
    const myInput = await screen.findByRole('textbox')
    const myButton = await screen.findByRole('button')
    const myCards = await screen.findAllByRole('heading', {name: /Smith/i})

    userEvent.type(myInput, 'Smith')
    userEvent.click(myButton)

    expect(myCards).toHaveLength(4)
    
  })

})