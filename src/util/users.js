export const getAllUsers = () => {
    return fetch('https://my-json-server.typicode.com/rachanavishwanath/myapp/users')
    // return fetch('http://localhost:3000/users')
                .then((res) => { 
                    return res.json(); 
                })
                .then((data) => (data))
}

export const getUser = (userId) => {
    return fetch(`https://my-json-server.typicode.com/rachanavishwanath/myapp/users/${userId}`)
    // return fetch(`http://localhost:3000/users/${userId}`)
            .then((res) => { 
                return res.json(); 
            })
            .then((data) => (data))
}

export const editUser = (userId, data) => {
    const patchMethod = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    // changes aren't persistent between calls
    return fetch(`https://my-json-server.typicode.com/rachanavishwanath/myapp/users/${userId}`, patchMethod)
    // changes are persistent between calls
    // return fetch(`http://localhost:3000/users/${userId}`, patchMethod)
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

export const deleteUser = (userId) => {
    const deleteMethod = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    // changes aren't persistent between calls
    return fetch(`https://my-json-server.typicode.com/rachanavishwanath/myapp/users/${userId}`, deleteMethod)
    // changes persistent between calls
    // return fetch(`http://localhost:3000/users/${userId}`, deleteMethod)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}