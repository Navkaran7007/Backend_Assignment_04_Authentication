import { AppError, RepositoryError, ServiceError,
  AuthenticationError, AuthorizationError,
} from "../src/api/v1/errors/errors"
import { HTTP_STATUS } from "../src/api/v1/constants/httpConstants";

describe("Error Classes", () => {
  it("AppError", () => {
    const error = new AppError("NOT_FOUND", "NOT_FOUND", 404);
    expect(error.message).toBe("NOT_FOUND");
    expect(error.code).toBe("NOT_FOUND");
    expect(error.statusCode).toBe(404);
  });

  it("RepositoryError", () => {
    const error = new RepositoryError("DataBase error", "DataBase failed");
    expect(error.code).toBe("DataBase failed");
    expect(error.statusCode).toBe(HTTP_STATUS.INTERNAL_SERVER_ERROR);
  });

  it("ServiceError", () => {
    const error = new ServiceError("Bad data");
    expect(error.code).toBe("SERVICE_ERROR");
    expect(error.statusCode).toBe(HTTP_STATUS.INTERNAL_SERVER_ERROR);
  });

  it("AuthenticationError", () => {
    const error = new AuthenticationError("Invalid token");
    expect(error.code).toBe("AUTHENTICATION_ERROR");
    expect(error.statusCode).toBe(HTTP_STATUS.UNAUTHORIZED);
  });

  it("AuthorizationError", () => {
    const error = new AuthorizationError("No access");
    expect(error.code).toBe("AUTHORIZATION_ERROR");
    expect(error.statusCode).toBe(HTTP_STATUS.FORBIDDEN);
  });
});
