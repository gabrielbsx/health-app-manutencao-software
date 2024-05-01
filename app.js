import GetVaccinatedUseCase from "./core/app/get-vaccinated.js";
import GenderType from "./core/domain/vo/gender-type.js";
import FirestoreVaccineRepository from "./core/infra/firebase/vaccine-repository.firestore.js";
import FirestorePatientRepository from "./core/infra/firebase/patient-repository.firestore.js";

async function main() {
  const firestoreVaccineRepository = new FirestoreVaccineRepository();
  const firestorePatientRepository = new FirestorePatientRepository();
  const getVaccinatedUseCase = new GetVaccinatedUseCase(
    firestoreVaccineRepository,
    firestorePatientRepository
  );

  await getVaccinatedUseCase.execute({
    patient: {
      id: 'Bo9v7knaiSoqoxuVvVZ0',
      gender: GenderType.MALE,
    },
  });
}

main()
  .catch(console.error);
