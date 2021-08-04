import moment from "moment"

export const formatCurrency = (amount: number): string => {
    if (amount === null || amount === undefined) {
        return "$0.00"
    }
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

export const formatCurrencyCents = (amount: number): string => {
    return formatCurrency(amount / 100)
}

export const formatCurrencyAsThousands = (amount: string): string => {
    try {
        const amountNum = parseFloat(amount)
        if (Math.abs(amountNum) > 999) {
            return `$${(Math.abs(amountNum) / 1000).toFixed(1)} k`
        } else {
            return `$${Math.abs(amountNum)}`
        }
    } catch (err) {
        return "-"
    }
}

export const formatDate = (unformattedDate: string, format?: string, formatOfUnformattedData?: string): string => {
    const unformatted = formatOfUnformattedData
        ? moment(unformattedDate, formatOfUnformattedData)
        : moment(unformattedDate)
    format = format ? format : "MM/DD/YYYY"
    return unformatted.format(format)
}

export const formateDateObject = (unformatedDate: Date, format?: string): string => {
    format = format ? format : "MM/DD/YYYY"
    return moment(unformatedDate).format(format)
}
