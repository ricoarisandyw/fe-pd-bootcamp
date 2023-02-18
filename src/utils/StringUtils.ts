const StringUtils = {
    parseReview: (reviewCount: number) => reviewCount > 110 ? "110+" : reviewCount,
    parseNominal: (myNumber: number = -1) => {
        const nominalSeparator = ".";
        const nominalValue = myNumber.toString().split("").reverse().reduce((acc, digit, index) => {
            if (index > 0 && index % 3 === 0) {
                acc.push(nominalSeparator);
            }
            acc.push(digit);
            return acc;
        }, [] as string[]).reverse().join("");
        return nominalValue
    },
    getTextFromHtml: (html: string) => {
        const div = document.createElement('div')
        div.innerHTML = (html)
        return div.textContent
    }
}

export default StringUtils