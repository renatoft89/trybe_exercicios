import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import pokemonMock from './data/mockData'

describe("Teste App.js", () => {

  beforeEach(() => {
    jest.clearAllMocks()
    global.fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue(pokemonMock) })
    render(<App />)

  })

  it("Verifica se todos os elementos estao na tela: logo, titulo, input, button", () => {
    const logo = screen.getByRole('img', { name: /logo/i })
    const title = screen.getByRole('heading', { level: 3, name: /Pesquise um Pokemon/i })
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /pesquisar/i })
    expect(logo).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('deve conseguir digitar um Pokemon no input', async () => {
    const inputEl = screen.getByRole('textbox')

    userEvent.type(inputEl, 'Charizard')

    expect(inputEl).toHaveValue('Charizard')
  })

  it('Deve pesquisar pelo pokemon digitado e após a busca concluída, deve exibir o nome do Pokemon e limpar o input', async () => {
    const button = screen.getByRole('button', { name: /pesquisar/i })
    const input = screen.getByRole('textbox')

    userEvent.type(input, 'Pikachu')
    expect(input).toHaveValue('Pikachu')
    userEvent.click(button)

    const title = await screen.findByText(/Pikachu/i)
    expect(input).toHaveValue('')
    expect(title).toBeInTheDocument()
  })

  it('Deve exibir o pokemon pesquisado dentro do card', async () => {
    const inputEl = screen.getByRole('textbox')
    const buttonEl = screen.getByRole('button')

    userEvent.type(inputEl, 'pikachu')
    userEvent.click(buttonEl)

    const pikachuText = await screen.findByRole('heading', { level: 3, name: 'Pikachu-EX' });
    expect(pikachuText).toBeInTheDocument();

    const pikachuCardImg = await screen.findByAltText('Pikachu-EX-card')
    expect(pikachuCardImg).toBeInTheDocument();

  })
})