export function toDate(date) {
    const format = new Date(date)

    console.log(format)
    return format.getDate() +"-" + format.getMonth() + 1 +"-" + format.getFullYear()
}