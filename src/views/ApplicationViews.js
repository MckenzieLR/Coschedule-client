import { StoryList } from "../components/stories/StoryList";
import { Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/externaldatasource" element={<StoryList/>}/>
        </Routes>
    </>
}