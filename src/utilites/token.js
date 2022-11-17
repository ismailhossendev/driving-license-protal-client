
const token = email => {

    fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
        })

}
export default token;