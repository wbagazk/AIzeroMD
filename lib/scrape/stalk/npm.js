const axios = require('axios');

async function npmstalk(packageName) {
    try {
        const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
        const stalk = response.data;
        const versions = stalk.versions;
        const allVersions = Object.keys(versions);
        const latestVersion = allVersions[allVersions.length - 1];
        const publishVersion = allVersions[0];
        const packageLatest = versions[latestVersion];
        return {
            name: packageName,
            versionLatest: latestVersion,
            versionPublish: publishVersion,
            versionUpdate: allVersions.length,
            latestDependencies: packageLatest.dependencies ? Object.keys(packageLatest.dependencies).length : 0,
            publishDependencies: versions[publishVersion].dependencies ? Object.keys(versions[publishVersion].dependencies).length : 0,
            publishTime: stalk.time.created,
            latestPublishTime: stalk.time[latestVersion]
        };
    } catch (error) {
        console.error('Error fetching NPM package details:', error);
        throw new Error('Could not fetch NPM package details');
    }
}

module.exports = { npmstalk };