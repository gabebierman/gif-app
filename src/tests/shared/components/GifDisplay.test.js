import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GifDisplay from "../../../shared/components/GifDisplay";

// - Create mock funcitons

const addFavorite = jest.fn();
const removeFavorite = jest.fn();

// - create dummy data for each test

const dummyGif = {
    title: "Test Gif",
    url: "https://nowhere-noise.bandcamp.com/",
    gif_id: "Test ID",
};

// - create custom render function

const customRender = (isFavortie, renderOptions = {}) => {
    return render(
        <GifDisplay
            {...dummyGif}
            removeFavorite={removeFavorite}
            addFavorite={addFavorite}
            isFavorite={isFavortie}
        ></GifDisplay>,
        renderOptions
    );
};

describe("GifDisplay", () => {
    describe("Rendering", () => {
        it("should render Gif Display", () => {
            const { queryByText } = customRender(true);
            const title = queryByText(dummyGif.title);
            expect(title).toBeTruthy();
        });
        it("should render image with correct url", () => {
            const { baseElement } = customRender(true);
            const img = baseElement.querySelector("img");
            expect(img).toBeTruthy();
            expect(img.src).toBe(dummyGif.url);
        });
        it("should render remove favorite button if isFavorite", () => {
            // const { baseElement } = customRender(true);
            // const button = baseElement.querySelector("button");
            // expect(button).toBeTruthy();
            // expect(button.textContent).toBe("Remove Favorite");
            // expect(button.textContent).not.toBe("Add Favorite");
            const { queryByText } = customRender(true);
            const removeBtn = queryByText("Remove Favorite");
            const addBtn = queryByText("Add Favorite");
            expect(addBtn).toBeNull();
            expect(removeBtn).toBeTruthy();
        });
        it("should render add favorite button if !isFavorite", () => {
            // const { baseElement } = customRender(false);
            // const button = baseElement.querySelector("button");
            // expect(button).toBeTruthy();
            // expect(button.textContent).not.toBe("Remove Favorite");
            // expect(button.textContent).toBe("Add Favorite");
            const { queryByText } = customRender(false);
            const removeBtn = queryByText("Remove Favorite");
            const addBtn = queryByText("Add Favorite");
            expect(addBtn).toBeTruthy();
            expect(removeBtn).toBeNull();
        });
    });
    describe("Functionality", () => {
        it("should call addFavorite with correct arguments on click", () => {
            const { queryByText } = customRender(false);
            const addBtn = queryByText("Add Favorite");
            expect(addBtn).toBeInTheDocument();
            expect(addFavorite.mock.calls.length).toBe(0);
            expect(removeFavorite.mock.calls.length).toBe(0);
            fireEvent.click(addBtn);
            expect(addFavorite.mock.calls.length).toBe(1);
            expect(removeFavorite.mock.calls.length).toBe(0);
            fireEvent.click(addBtn);
            expect(addFavorite.mock.calls.length).toBe(2);
            expect(removeFavorite.mock.calls.length).toBe(0);
            const firstInvocation = addFavorite.mock.calls[0];
            expect(firstInvocation[0]).toEqual({ ...dummyGif });
        });
        it("could call removeFavorite with correct arguments on click", () => {
            const { queryByText } = customRender(true);
            const removeBtn = queryByText("Remove Favorite");
            expect(removeBtn).toBeInTheDocument();
            expect(removeFavorite.mock.calls.length).toBe(0);
            expect(addFavorite.mock.calls.length).toBe(0);
            fireEvent.click(removeBtn);
            expect(removeFavorite.mock.calls.length).toBe(1);
            expect(addFavorite.mock.calls.length).toBe(0);
            fireEvent.click(removeBtn);
            expect(removeFavorite.mock.calls.length).toBe(2);
            expect(addFavorite.mock.calls.length).toBe(0);
            const firstInvocation = removeFavorite.mock.calls[0];
            expect(firstInvocation[0]).toBe(dummyGif.gif_id);
        });
    });
});
