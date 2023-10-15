export default class ApiError extends Error {
  statusCode: number;

  constructor(message: string, code: number) {
    super(message);
    this.name = "ApiError";
    this.statusCode = code;
  }
}
