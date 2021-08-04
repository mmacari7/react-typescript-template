import React from "react"
import OverviewFilter from "./OverviewFilter/OverviewFilter"
import PerformanceMetrics from "./PerformanceMetrics/PerformanceMetrics"

const Overview = (): JSX.Element => {
    return (
        <div>
            <OverviewFilter />
            <PerformanceMetrics />
        </div>
    )
}

export default Overview
