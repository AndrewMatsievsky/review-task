import { container } from "tsyringe";
import { RoundProcessor } from "./round.processor";
import worker from "../worker";

export class RoundService {
  go() {
    const roundProcessor = container.resolve(RoundProcessor);

    roundProcessor.run(worker);

    return roundProcessor.getResult() as any;
  }
}
