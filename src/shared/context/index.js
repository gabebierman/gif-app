export { FavoritesProvider } from "./FavoritesContext";
export { SearchProvider } from "./SearchContext";
export { UserProvider } from "./UserContext";

export function CombinedProvider(props) {
    return (
        <UserProvider>
            <FavoritesProvider>
                <SearchProvider>{props.children}</SearchProvider>
            </FavoritesProvider>
        </UserProvider>
    );
}
