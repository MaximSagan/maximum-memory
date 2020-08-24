import React from "react";
import GameBoard from "./GameBoard";
import { CARD_THEMES } from "../../constants";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";

describe("GameBoard", () => {
  beforeEach(cleanup);

  it("updates progress bar when user gets a match", async () => {
    const numberOfCards = 10;

    const { findAllByTestId } = render(
      <GameBoard
        gameSettings={{ numberOfCards, cardTheme: CARD_THEMES[0] }}
        onEndGame={() => {}}
      />
    );
    const cards = await findAllByTestId(/^testable-card/, undefined, {
      timeout: 4800,
    });

    const firstCard = cards[0];
    const firstCardData = getCardData(firstCard);
    const matchingCard = cards.find((card) => {
      const cardData = getCardData(card);
      return (
        cardData.imageId === firstCardData.imageId &&
        cardData.cardIndex !== firstCardData.cardIndex
      );
    })!;
    fireEvent.click(firstCard);
    fireEvent.click(matchingCard);

    await waitFor(() => {
      const progressBar = screen.getByRole("progressbar");
      expect(progressBar.getAttribute("aria-valuenow")).toBe("20");
    });
  });

  it("updates misses count when user misses a match", async () => {
    const numberOfCards = 10;
    const { findAllByTestId, findByTestId } = render(
      <GameBoard
        gameSettings={{ numberOfCards, cardTheme: CARD_THEMES[0] }}
        onEndGame={() => {}}
      />
    );
    const cards = await findAllByTestId(/^testable-card/, undefined, {
      timeout: 4000,
    });
    const firstCard = cards[0];
    const firstCardData = getCardData(firstCard);
    const nonMatchingCard = cards.find((card) => {
      const cardData = getCardData(card);
      return cardData.imageId !== firstCardData.imageId;
    })!;
    fireEvent.click(firstCard);
    fireEvent.click(nonMatchingCard);

    const missesDisplay = await findByTestId("misses");
    expect(missesDisplay).toHaveTextContent("Misses: 1");
  });
});

/**
 * Helper to get card data from element
 */
function getCardData(
  cardElement: HTMLElement
): { cardIndex: string; imageId: string } {
  const testData = cardElement.dataset["testid"];
  if (!testData) {
    throw new Error("No data");
  }
  const [, , cardIndex, imageId] = testData.split("-");
  return { cardIndex, imageId };
}
