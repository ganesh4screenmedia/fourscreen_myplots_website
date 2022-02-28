export const doApiCall = (intercepter, method, url, requestBody = '') =>
    new Promise((resolve, reject) => {
        const header =
            method === 'post' || method === 'delete'
                ? {
                    method,
                    url,
                    data: requestBody,
                }
                : {
                    method,
                    url,
                };

        intercepter(header)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
