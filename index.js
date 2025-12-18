const core = require("@actions/core")
const exec = require("@actions/exec")


async function run() {
    console.log("Example out")
    try {
        const versionType = core.getInput("version-type")
        const src = __dirname
        await exec.exec(`${src}/git_update.sh -v ${versionType}`)
    }catch(e){
        core.setFailed("")
    }
    console.log("Example out")
}
run();
