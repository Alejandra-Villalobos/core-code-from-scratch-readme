"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = require("./Input");
class Main {
    constructor() {
        this.singleInput = () => __awaiter(this, void 0, void 0, function* () {
            // Get a single input prompt
            let input = yield Input_1.Input.getInput('Where are you from?');
            console.log(input);
        });
        this.formInput = () => __awaiter(this, void 0, void 0, function* () {
            // Get a form prompt
            const formChoices = [
                { name: 'age', message: 'What is your age' },
                { name: 'lastName', message: 'What is your last name' },
                { name: 'movie', message: 'What is your favorite movie' },
            ];
            let input = yield Input_1.Input.getForm('Personal Information', formChoices);
            console.log(input);
        });
        this.selectInput = () => __awaiter(this, void 0, void 0, function* () {
            // Get a select prompt
            const selectChoices = [
                { option: 1, message: 'Pizza' },
                { option: 2, message: 'Sandwich' },
                { option: 3, message: 'Cofee' },
                { option: 4, message: 'Lasagna' },
            ];
            let input = yield Input_1.Input.getSelect('Menu', selectChoices);
            console.log(input);
        });
        this.selectByIdInput = () => __awaiter(this, void 0, void 0, function* () {
            // Get a select by id prompt
            const selectByIdChoices = [
                { name: '#64b5f6', message: 'Blue Lighten 2' },
                { name: '#009688', message: 'Purple Lighten 1' },
                { name: '#ec407a', message: 'Pink Lighten 1' },
                { name: '#f44336', message: 'Red' },
            ];
            let input = yield Input_1.Input.getSelectById('Select a color', selectByIdChoices);
            console.log(input);
        });
        this.confirmInput = () => __awaiter(this, void 0, void 0, function* () {
            // Get a confirmation prompt
            let input = yield Input_1.Input.getConfirm('Are you a developer');
            console.log(input);
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * ========================
             * Play with this class
             * ========================
             * You can remove the comments one by one and see how it behaves
             * Try to do your own implementations
             * Check how the functions work
             * Have fun!! :D
             */
            // await this.singleInput();
            // await this.formInput();
            // await this.selectInput();
            // await this.selectByIdInput();
            // await this.confirmInput();
        });
    }
}
exports.default = Main;
