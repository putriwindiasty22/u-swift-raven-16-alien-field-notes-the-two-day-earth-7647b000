import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Flew 40 light-years for Earth's oceans, stayed because humans apologise to chairs they bump into. Four stars — the gift shop sells you the planet back as a snow globe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
