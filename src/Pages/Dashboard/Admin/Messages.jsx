import useFetch from '../../../hooks/useFetch';

const Messages = () => {
    const [messages] = useFetch('http://localhost:5000/messages')

    return (
        <div>
            <h1>Contact Messages </h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>MESSAGE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        messages.map((message, idx) => {
                            return <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{message.name}</td>
                                <td>{message.email} | {message.date}</td>
                                <td>{message.message}</td>
                                <td><button className="btn btn-sm btn-secondary">{message.status}</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Messages;