import { inject, injectable } from "tsyringe";
import { RoundState } from "./round.state";

@injectable()
export class RoundProcessor {
  constructor(@inject(RoundState) private roundState: RoundState) {}

  public run(worker): void {
    worker.run(this.roundState.params);
  }

  public getResult() {
    return {
      contexts: this.roundState.params.contexts,
    };
  }
}
