const func = async (bool) => {
    const promise = new Promise((res, rej) => {
        bool ? res() : rej();
    });
    try {
        const data = await promise;
        if (data) {
            console.log(data);
        } else {
            console.log('no data');
        }
    } catch (error) {
        console.log('error');
    } finally {
        console.log('end');
    }
}

func(true);
// func(false);