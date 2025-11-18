import { describe, expect, test } from "@jest/globals";
import { fizzBuzz } from "../src/scripts/fizzBuzz";

describe('FizzBuzz test for multiples of 3 and 5', () => {

    test('returns Fizz when multiple of 3', () => {
        let valor_entrada = 9;
        let respuesta_esperada = {
            status: "ok",
            message: "El número es divisible por 3",
            data: {
                number: 9,
                result: "Fizz"
            }
        }
        let resultado = fizzBuzz(valor_entrada);
        expect(typeof resultado.data.number).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe("Fizz");
    });

    test('returns Buzz when multiple of 5', () => {
        let valor_entrada = 5;
        let respuesta_esperada = {
            status: "ok",
            message: "El número es divisible por 5",
            data: {
                number: 5,
                result: "Buzz"
            }
        }
        let resultado = fizzBuzz(valor_entrada);
        expect(typeof resultado.data.number).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe("Buzz");

    })

    test('returns FizzBuzz when multiple of 3 and 5', () => {
        let valor_entrada = 15;
        let respuesta_esperada = {
            status: "ok",
            message: "El número es divisible por 3 y 5",
            data: {
                number: 15,
                result: "FizzBuzz"
            }
        }
        let resultado = fizzBuzz(valor_entrada);
        expect(typeof resultado.data.number).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe("FizzBuzz");
    })

    test('returns number when is not multiple of 3 and 5', () => {
        let valor_entrada = 4;
        let respuesta_esperada = {
            status: "ok",
            message: "El número no es divisible por 3 y 5",
            data: {
                number: 4,
                result: 4
            }
        }
        let resultado = fizzBuzz(valor_entrada);
        expect(typeof resultado.data.number).toBe("number");
        expect(resultado).toEqual(respuesta_esperada);
        expect(resultado.data.result).toBe(4);
    })
})