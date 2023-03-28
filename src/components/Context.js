const { createContext, useContext, useEffect, useState } = require("react");
const AppContext = createContext();

export let API_URL = `http://www.omdbapi.com/?apikey=6cae4603`
const AppProvider = ({ children }) => {
    // All State 
    const [Movies, setMovies] = useState([])
    const [Page, setPage] = useState(1)
    const [Userquary, setUserquary] = useState("ninja")
    const [Reaspones, setReaspones] = useState("True")
    const [Usersearch, setUsersearch] = useState("")
    const [Totalresult, setTotalresult] = useState(0)
    const [visibal, setvisibal] = useState(false)
    // Get Api Data 
    const GetMovieData = async (url) => {
        const res = await fetch(url)
        const data = await res.json();

        setReaspones(data.Response)

        setTotalresult(data.totalResults)
        if (data.Response === "True") {
            setReaspones("True")
            if (Page > 1) {
                let moviearr = [...Movies, ...data.Search]
                setMovies(moviearr)
            } else {
                setMovies(data.Search)
                setReaspones("True")
            }
        } else {
            setReaspones("False")

        }

    }

    // Infinity scroll Function
    const handlescroll = async () => {

        if (Reaspones === "True") {
            if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight) {
                setPage((prev) => prev + 1)
            }
        }
    }

    const Togalevisibal = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 4000) {
            setvisibal(true)
        } else if (scrolled <= 4000) {
            setvisibal(false)
        }
    }

    const scrolltop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    useEffect(() => {
        if (Reaspones === "True") {
            window.addEventListener("scroll", Togalevisibal)

            return () => window.removeEventListener("scroll", Togalevisibal)
        }
    }, [])



    // Call Function 
    useEffect(() => {
        GetMovieData(`${API_URL}&s=${Userquary}&page=${Page}`)
    }, [Userquary, Page])



    // Call Infinity scroll Function 
    useEffect(() => {
        if (Reaspones === "True") {
            window.addEventListener("scroll", handlescroll)
            return () => window.removeEventListener("scroll", handlescroll)
        }
    }, [])



    return <AppContext.Provider value={{ Movies, setMovies, Page, setPage, Userquary, visibal, setUserquary, Reaspones, Usersearch, setUsersearch, scrolltop, Totalresult, setTotalresult }}>{children}</AppContext.Provider>
}

// Custom hook 
const useGlobal = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobal }