import { describe, expect, it, test, vi } from "vitest";
import { Server } from "../src/class/Server";

test("instanciate server", () => {
  const server = new Server();

  expect(server).toBeInstanceOf(Server);
});

describe("listen", () => {
  it("should listen on port", () => {
    const server = new Server();

    expect(server.listen).toBeTypeOf("function");

    const spy = vi.spyOn(server, "listen");

    server.listen(6000);

    expect(spy).toBeCalledTimes(1);
  });

  it("should fail listen on port", () => {
    const server = new Server();

    expect(server.listen).toBeTypeOf("function");

    const spy = vi.spyOn(server, "listen");

    server.listen(6000);

    expect(() => server.listen(7000)).toThrowError(
      "Server already listening on port 6000"
    );
    expect(spy).toBeCalledTimes(2);
  });
});
