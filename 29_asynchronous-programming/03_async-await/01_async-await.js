/*
• Async and Await
• Async and await is an elegant way to handle promises. It is easy to understand and it clean to write
*/

const func = async (bool) => {
    const promise = new Promise((res, rej) => {
        bool ? res('inside resolve') : rej('inside reject');
    });
    try {
        const data = await promise;
        console.log(data);
    } catch (error) {
        console.log(error)
    } finally {
        console.log('end')
    }
}

func(true);
// func(false);

