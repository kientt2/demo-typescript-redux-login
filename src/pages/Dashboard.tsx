import { useSelector } from "react-redux";

type Data = {
    user: string
    main: {
        value: string
    }
}

function PageDashboard() {
    const user = useSelector((state:Data) => {console.log(state); return state.user});
    console.log(user);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Wellcome back, <b>{user}</b>!</p>
        </div>
    );
}

export default PageDashboard;