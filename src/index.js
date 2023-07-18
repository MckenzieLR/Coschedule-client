import { createRoot} from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { CodeChallenge } from "./App"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <CodeChallenge/>
  </BrowserRouter>
)