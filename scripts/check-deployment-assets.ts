import { auditBuildAssets } from "./deployment-assets.ts";
const result = await auditBuildAssets({ directory: "project-name/dist", deploymentUrl: "https://samuelasherrivello-com-ai.github.io/babylon-lite-off-the-road-multiplayer/", obsoleteBases: ["/babylon-lite-super-offroad-clone/"] });
if (result.failures.length) throw new Error(result.failures.join("\n"));
console.log("Production asset paths checked:", result.checked.length);
