import { Input } from './Input';

export default class Main {
  singleInput = async (): Promise<void> => {
    // Get a single input prompt
    let input = await Input.getInput('Where are you from?');
    console.log(input);
  };

  formInput = async (): Promise<void> => {
    // Get a form prompt
    const formChoices = [
      { name: 'age', message: 'What is your age' },
      { name: 'lastName', message: 'What is your last name' },
      { name: 'movie', message: 'What is your favorite movie' },
    ];
    let input = await Input.getForm('Personal Information', formChoices);
    console.log(input);
  };

  selectInput = async (): Promise<void> => {
    // Get a select prompt
    const selectChoices = [
      { option: 1, message: 'Pizza' },
      { option: 2, message: 'Sandwich' },
      { option: 3, message: 'Cofee' },
      { option: 4, message: 'Lasagna' },
    ];
    let input = await Input.getSelect('Menu', selectChoices);
    console.log(input);
  };

  selectByIdInput = async (): Promise<void> => {
    // Get a select by id prompt
    const selectByIdChoices = [
      { name: '#64b5f6', message: 'Blue Lighten 2' },
      { name: '#009688', message: 'Purple Lighten 1' },
      { name: '#ec407a', message: 'Pink Lighten 1' },
      { name: '#f44336', message: 'Red' },
    ];
    let input = await Input.getSelectById('Select a color', selectByIdChoices);
    console.log(input);
  };

  confirmInput = async (): Promise<void> => {
    // Get a confirmation prompt
    let input = await Input.getConfirm('Are you a developer');
    console.log(input);
  };

  async start() {
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
  }
}
