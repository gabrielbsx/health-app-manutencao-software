import PatientNotFoundException from '../domain/exceptions/patient-not-found.exception.js';
import Patient from '../domain/patient.js';

export default class GetVaccinatedUseCase {
  #vaccineRepository;
  #patientRepository;

  constructor(vaccineRepository, patientRepository) {
    this.#vaccineRepository = vaccineRepository;
    this.#patientRepository = patientRepository;
  }

  async execute(input) {
    const { patient } = input;

    const { id: patientId } = patient;

    const patientFromInput = new Patient(patient);

    const patientFromRepo = await this.#patientRepository.getById(patientId);

    PatientNotFoundException.exists(patientFromRepo);

    const { userId } = patientFromRepo;

    console.log(patientFromInput, patientFromRepo);

    const vaccines = await this.#vaccineRepository.query({
      field: 'userId',
      operator: '==',
      value: userId,
    });

    console.log(vaccines);
  }
}
