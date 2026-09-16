import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    const searchRules = [
        'skipEmptyTargetValues',
    ];
    const compare = createComparison(
        searchRules,
        [
            rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false),
        ]
    );

    return (data, state, action) => {
        return data.filter(row => compare(row, state));
    }
}