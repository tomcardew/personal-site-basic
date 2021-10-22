import * as CONSTANTS from "./Constants"

export function numberToPriceTag(value: number, digits: number = 2): string {
    let _value = value.toFixed(digits)
    return `$${_value}`
}

export function slugToProductName(slug: string): string {
    let partial = slug.split("-")
    partial = partial.map( elem => capitalize(elem))
    return partial.join(" ")
}

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export { CONSTANTS }