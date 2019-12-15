export const markFavorites = (tree,favorites) => {
    const isFavorite = favorites.include(tree.id);
    
    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode,favorites)),
    }
}