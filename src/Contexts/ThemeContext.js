import React, {useState} from 'react'
import lightTheme from '../CSS-in-JS/LightTheme.js'
import darkTheme from '../CSS-in-JS/DarkTheme.js'

const {Provider, Consumer} =  React.createContext();;

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(lightTheme);
    const [themeName, setThemeName] = useState("light");

    const toggleTheme = () => {
        if(themeName === "light") {
            setTheme(darkTheme)
            setThemeName("dark")
        }
        else {
            setTheme(lightTheme)
            setThemeName("light")
        }
    }

    return <Provider value={{theme, toggleTheme}}>{props.children}</Provider>
}

/* Using the HOC re-usability pattern */
export const ThemeToggleContextConsumer = (Component) => {
    return (props) => {
        return (
            <Consumer>
                {({theme, toggleTheme}) => <Component theme={theme} toggleTheme={toggleTheme} props={props}></Component>}
            </Consumer>
    )}
}

/* Using the HOC re-usability pattern */
export const ThemeContextConsumer = 
    C => props => <Consumer>{({theme}) => <C theme={theme} props={props}></C>}</Consumer>

// export const ThemeContextConsumer = (ContentTitle) => {
//     return (props) => {
//         return (
//             <Consumer>{
//                 ({theme}) => 
//                 <ContentTitle theme={theme} props={props}></ContentTitle>}
//             </Consumer>
//         )
//     }
// }


export {Consumer}