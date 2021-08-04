import React, { useEffect } from "react"
import "./Header.scss"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router"

const Header = (): JSX.Element => {
    const history = useHistory()

    useEffect(() => {
        console.log("Loading")
    }, [])

    return (
        <div className="app-header">
            <div className="app-header-inner">
                <img src={""} alt="" />
                <Button className="logout" onClick={(e) => e.preventDefault()} id="logoutButton" variant="outlined">
                    <span className="review-payment">Logout</span>
                </Button>
            </div>
        </div>
    )
}

export default Header
