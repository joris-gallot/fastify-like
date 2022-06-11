export class Server {
  private started = false;
  private port = 3000;

  constructor() {
    console.log("Server instanciated");
  }

  listen(port: number) {
    if (this.started) {
      throw new Error(`Server already listening on port ${this.port}`);
    }

    this.port = port;
    this.started = true;

    console.log(`Server listening on port ${this.port}`);
  }
}
