export const markFavorites = (tree,favorites) => {
    const isFavorite = favorites.include(tree.id);
    
    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode,favorites))
    }
}

const favorites = ['id-2'];
const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [
        {
            id: 'id-2',
            name: 'Food',
            nodes: []
        },
    ],
};

console.log(markFavorites(tree,favorites));