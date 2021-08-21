export const poll = async(fn, fnCondition, ms) => {
    let result = await fn();
    console.log("inside poll", result.data.result, !fnCondition(result))
    while (!fnCondition(result)) {
        await wait(ms);
        result = await fn();
        console.log("refetch", result.data.result)
    }
    return result;
}

function wait(ms = 1000) {
    return new Promise(resolve => {
        console.log(`waiting ${ms} ms...`);
        setTimeout(resolve, ms);
    });
}