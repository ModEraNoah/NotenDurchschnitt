import {equal} from 'assert/strict';
import * as schnitt from "../notenschnitt.js";

describe("Eingabe prüfen", () => {

    it("nichts übergeben", () => {
        equal(schnitt.notenschnitt(), null);
    });

    it("String übergeben", () => {
        equal(schnitt.notenschnitt("mathe"), null);
    });

    it("String innerhalb mehrerer Noten", () => {
        equal(schnitt.notenschnitt([[1.3, 3], [2.7, 5], ["Eins", 3], [3.7, 9]]), null);
    });

    it("Number übergeben", () => {
        equal(schnitt.notenschnitt(4), null);
    });

    it("Nummer statt Array", () => {
        equal(schnitt.notenschnitt([[2.7, 3], 3, [1.0, 9]]), null);
    });

    it("Zu langes Element", () => {
        equal(schnitt.notenschnitt([2.7, 3], [3.0, 3, 5], [4.0, 9]), null);
    });

    it("Leeres Array", () => {
        equal(schnitt.notenschnitt([[]]), null);
    });

});

describe("Richtige Berechnung prüfen", () => {

    it("Genau eine Note übergeben", () => {
        equal(schnitt.notenschnitt([[1.3, 5]]), 1.3);
    });

    it("Mehrere Noten übergeben", () => {
        equal(schnitt.notenschnitt([[1.3, 5], [2.0, 3], [1.7, 1]]), 1.57);
    });

    it("Nur eine Note ohne Angeabe der CP", () => {
        equal(schnitt.notenschnitt([[2.7]]), 2.7);
    })

    it("Eine Note ohne Angabe der CP, eine mit", () => {
        equal(schnitt.notenschnitt([[1.3], [2.0, 2]]), 1.76);
    });

});