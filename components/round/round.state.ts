import { injectable, Lifecycle, scoped } from "tsyringe";
import { ModeParams } from "../../types";
import finalizer from "../finalizer";
import worker from "../worker";
import config from "../../config";
import { RoundParamsDto } from "common/dto/round-params.dto";

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class RoundState {
  public agentDI = {
    finalizer,
    worker,
  };

  public params: Partial<ModeParams>;

  constructor(public readonly args: RoundParamsDto) {
    this.params = {
      args,
      agentDI: {
        ...this.agentDI,
      },
      ...config,
    };
  }

  public registerInAgent(data: { [name: string]: any }): void {
    Object.assign(this.agentDI, data);
  }
}
