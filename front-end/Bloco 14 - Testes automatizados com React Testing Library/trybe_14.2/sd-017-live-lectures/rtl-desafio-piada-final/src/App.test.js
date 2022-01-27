import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Teste do App Jokes", () => {

  test('exibe o título "Piadas do Chuck Norris" na tela', () => {
    render(<App />);
    const headingEl = screen.getByRole("heading");
    expect(headingEl).toBeInTheDocument();
  });

  test("exibe o corpo da piada na tela", async () => {
    // global.fetch = () => Promise.resolve({
    //   json: () => Promise.resolve({ value: "Chuck Norris can sneeze your face off." })
    // })
    // global.fetch = async () => ({
    //   json: async () => ({ value: "Chuck Norris can sneeze your face off." })
    // });
    global.fetch = jest.fn()
      .mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          value: "Chuck Norris can sneeze your face off."
        })
      })

    render(<App />);

    const jokeBodyEl = await screen.findByText(
      /Chuck Norris can sneeze your face off/
    );
    expect(jokeBodyEl).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://api.chucknorris.io/jokes/random");
  });
});
