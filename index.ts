import "reflect-metadata";

import { RoundService } from "./components/round/round.service";
import * as process from "node:process";
import { container } from "tsyringe";
import { RoundState } from "./components/round/round.state";
import { RoundInjector } from "./components/round/round.injector";
import { RoundProcessor } from "./components/round/round.processor";

container.register(RoundState, { useValue: new RoundState({}) });

container.register(RoundService, { useClass: RoundService });

container.register(RoundInjector, { useClass: RoundInjector });

container.register(RoundProcessor, { useClass: RoundProcessor });

const roundService = container.resolve(RoundService);

const res = roundService.go();

console.log(res);
process.exit(0);
