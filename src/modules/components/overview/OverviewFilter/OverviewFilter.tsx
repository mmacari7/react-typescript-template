import React from "react"
import "./OverviewFilter.scss"
import "date-fns"

import { Button } from "@material-ui/core"

const OverviewFilter = (): JSX.Element => {
    return (
        <div className="overview-filter">
            <div className="overview-filter-inner">
                <div>
                    <Button
                        className="search-button"
                        onClick={(e) => e.preventDefault()}
                        id="searchButton"
                        variant="outlined"
                    >
                        <span className="review-payment">Search</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OverviewFilter
