export const getStories = () => {
    return fetch("http://localhost:8000/externaldatasource")
        .then(response => response.json())
}