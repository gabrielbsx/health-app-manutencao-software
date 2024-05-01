export default class NotFoundException extends Error {
  constructor(entity, data) {
    super(`${entity} not found: ${data}`);
    this.name = `${entity}NotFound`;
  }

  static exists(data, entity) {
    if (!data) {
      throw new NotFoundException(entity, data);
    }

    return data;
  }
}
