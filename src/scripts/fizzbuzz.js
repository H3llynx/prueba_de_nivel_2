export const fizzBuzz = (number) => {
    try {
        if (!number || isNaN(number)) {
            return {
                status: "error",
                message: "Please try again with a real number :)",
                data: {
                    number: number,
                    result: "Not a Number"
                }
            }
        };
        if (number % 5 === 0 && number % 3 === 0) {
            return {
                status: "ok",
                message: "success",
                data: {
                    number: number,
                    result: "FizzBuzz"
                }
            }
        } else if (number % 5 === 0) {
            return {
                status: "ok",
                message: "success",
                data: {
                    number: number,
                    result: "Buzz"
                }
            }
        } else if (number % 3 === 0) {
            return {
                status: "ok",
                message: "success",
                data: {
                    number: number,
                    result: "Fizz"
                }
            }
        } else return {
            status: "ok",
            message: "success",
            data: {
                number: number,
                result: number
            }
        };
    } catch (error) {
        return {
            status: "error",
            message: error.message,
            data: number
        }
    }
};