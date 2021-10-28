/*registration*/

const PostRegistration = () => {
    fetch('http://localhost:3000/api/registration', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: '',
            login: '',
            password: ''
        })
    })

        .then(res => res.json())

        .then(res => {
            console.log(res)
        })


        .catch(errorMessage => {
            console.log(errorMessage.error)
        })
}






/*authorization*/

const postAuthorization = () => {
    fetch('http://localhost:3000/api/authorization', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: '',
            password: ''
        })
    })

        .then(res => res.json())

        .then(res => {
            console.log(res)
        })


        .catch(errorMessage => {
            console.log(errorMessage.error)
        })
}


/*photo*/

const getPhoto = () => {
    fetch('http://localhost:3000/api/photo')

        .then(res => res.json())

        .then(res => {
            console.log(res)
        })


        .catch(errorMessage => {
            console.log(errorMessage.error)
        })
}



/*photo-ID*/

const getPhotoId = () => {
    fetch('http://localhost:3000/api/photo:id')

        .then(res => res.json())

        .then(res => {
            console.log(res)
        })


        .catch(errorMessage => {
            console.log(errorMessage.error)
        })
}


/*comment*/

const PostComment = () => {
    fetch('http://localhost:3000/api/comment', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imgId: 1,
            userId: 1,
            content: ''
        })
    })

        .then(res => res.json())

        .then(res => {
            console.log(res)
        })


        .catch(errorMessage => {
            console.log(errorMessage.error)
        })
}



/*like*/

const PostLike = () => {
    fetch('http://localhost:3000/api/like', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imgId: 1,
            userId: 1,
        })
    })

        .then(res => res.json())

        .then(res => {
            console.log(res)
        })


        .catch(errorMessage => {
            console.log(errorMessage.error)
        })
}
