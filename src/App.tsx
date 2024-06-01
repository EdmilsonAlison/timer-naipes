import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './styles/themes/default.ts'
import {GlobalStyle} from './styles/global.ts'
import {Router} from './Router.tsx'
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router/>
                <GlobalStyle/>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
