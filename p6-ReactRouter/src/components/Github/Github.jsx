import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vbs30')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }, [])

    
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`https://api.github.com/users/${data.login}/repos`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const repoData = await response.json();
                setRepos(repoData);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRepos();
    }, [data.login]);

    if (error) {
        return (
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                <p className="text-red-500">Error loading repositories: {error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-6 mb-6">
                <img
                    src={data?.avatar_url}
                    alt="GitHub Profile"
                    className="w-32 h-32 rounded-full border-4 border-gray-200"
                />
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{data?.name}</h1>
                    <p className="text-gray-600">@{data?.login}</p>
                    <div className="mt-2 flex gap-4">
                        <div className="text-center">
                            <span className="font-bold text-gray-800">{data?.followers}</span>
                            <p className="text-sm text-gray-600">Followers</p>
                        </div>
                        <div className="text-center">
                            <span className="font-bold text-gray-800">{data?.following}</span>
                            <p className="text-sm text-gray-600">Following</p>
                        </div>
                    </div>
                </div>
            </div>

            {data?.bio && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Bio</h2>
                    <p className="text-gray-600">{data.bio}</p>
                </div>
            )}

            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Repositories</h2>
                <div className="grid grid-cols-1 gap-3">
                    {repos.map((repo) => (
                        <div
                            key={repo.id}
                            className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            <h3 className="font-medium text-blue-600">{repo.name}</h3>
                            {repo.description && (
                                <p className="text-sm text-gray-600 mt-1">{repo.description}</p>
                            )}
                            <div className="flex gap-4 mt-2 text-sm text-gray-500">
                                <span>⭐ {repo.stargazers_count} stars</span>
                                <span>🍴 {repo.forks_count} forks</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export const GithubLoader = async () => {
    const response = await fetch('https://api.github.com/users/vbs30')
    return response.json()
}
