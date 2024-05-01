export class RegisterPatientUseCase {
  #personRepository;

  constructor(personRepository) {
    this.#personRepository = personRepository;
  }

  async execute(input) {
    await this.#personRepository.create(input);
  }
}
