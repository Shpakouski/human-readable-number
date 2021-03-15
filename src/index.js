module.exports = function toReadable (number) {
    const one = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const MakeReadableNumber = (num) => {
        if (num < 20) return one[num];
        let digit = num % 10;
        if (num < 100)
            return dozens[Math.floor(num / 10)] + (digit ? " " + one[digit] : "");
        if (num < 1000)
            return (
                one[Math.floor(num / 100)] +
                " hundred" +
                (num % 100 == 0 ? "" : " " + MakeReadableNumber(num % 100))
            );
        return (
            MakeReadableNumber(Math.floor(num / 1000)) +
            " thousand" +
            (num % 1000 != 0 ? "" + MakeReadableNumber(num % 1000) : " ")
        );
    };

    return MakeReadableNumber(number);
}
