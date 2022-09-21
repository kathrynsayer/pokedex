export function filterSinglePokemonByName(list, name) {
    if (name) return list.filter((pokemon) => pokemon.name == name);
    else return list;
}

export function getListOf(list, prop) {
    return [...new Set(list.map((pokemon) => pokemon[prop] || ""))];
}

export function getPokemonStats(list) {
    return list.reduce(
        (stats, pokemon) => {
            stats.total++;

            stats.acc_score += Number(pokemon.rt_score);
            stats.avg_score = stats.acc_score / stats.total;

            if (stats.latest == null || stats.latest < pokemon.release_date) {

        stats.latest = pokemon.release_date;
    }

    return stats;
},
{
    acc_score: 0,
        avg_score: 0,
            total: 0,
                latest: null,
    });
}