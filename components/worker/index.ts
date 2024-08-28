import { container } from "tsyringe";
import { ISpinParams } from "../../types";
import { RoundInjector } from "../../components/round/round.injector";

function run(params: ISpinParams) {
  container.resolve(RoundInjector).inject(params, { win: { total: 100 } });
  params.agentDI.finalizer.finish(params);
}

export default { run };
