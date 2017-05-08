module.exports = function () {
    var instanceRoot = "C:\\Development\\Sandbox";
    var config = {
        websiteRoot: instanceRoot + "\\Website",
        sitecoreLibraries: instanceRoot + "\\Website\\bin",
        licensePath: instanceRoot + "\\Data\\license.xml",
        solutionName: "PackageManager",
        buildConfiguration: "Debug",
        runCleanBuilds: false
    };
    return config;
};