const formatDiff = async ({ files, opts = {}, refs, versions }) => {
    if (await shouldPrintPatch(filename)) {