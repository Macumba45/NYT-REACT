import { FC } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Books } from "../../views/Books"
import { BooksDetailsView } from "../../views/BooksDetails"
import { LoginViewPage } from "../../views/Login"
import { SignUpView } from "../../views/SignUp"



const Router: FC = () => {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<LoginViewPage />} />
                <Route path="/login" element={<LoginViewPage />} />
                <Route path="/signUp" element={<SignUpView />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/details" element={<BooksDetailsView />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router