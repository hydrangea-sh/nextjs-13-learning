import React from "react";

type PageProps = {
    params: {
        searchTerm: string;
    };
};

type SearchResults = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ];
};

const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );

    const data: SearchResults = await res.json();
    return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
    const SearchResults = await search(searchTerm);

    return (
        <div>
            <p className="text-grey-500 text-sm">You searched for: {searchTerm}</p>

            <ol className="space-y-5 p-5">
                {SearchResults.organic_results.map((result) => (
                    <li key={result.position} className="list-decimal">
                        <p className="font-bold">{result.title}</p>
                        <p>{result.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default SearchResults;